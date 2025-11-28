import express from 'express';
import { buscarItensWeb } from '../services/tceService.js';
import { consultarGrupoMaterial } from '../services/govMaterialService.js';
import cached from '../middleware/cache.js';
import normalize from '../utils/normalize.js';

const router = express.Router();

router.get('/completa', cached(req => `pesquisa:completa:${JSON.stringify(req.query)}`), async (req, res) => {
  try {
    const params = {
      objeto: req.query.objeto || '',
      tamanhoPagina: req.query.tamanhoPagina || process.env.DEFAULT_PAGE_SIZE || 100000,
      paginaOffSet: req.query.paginaOffSet || 0,
      tipoPesquisa: req.query.tipoPesquisa || 0,
      periodoInicial: req.query.periodoInicial,
      periodoFinal: req.query.periodoFinal,
    };

    const itensResponse = await buscarItensWeb(params);
    const lista = Array.isArray(itensResponse) ? itensResponse : (itensResponse?.content || itensResponse?.lista || itensResponse?.data || []);

    const itensEnriquecidos = await Promise.all(lista.map(async (item) => {
      const nome = normalize(item?.descricao || item?.objeto || item?.nome || '');
      return {
        ...item,
        nomeNormalizado: nome,
      };
    }));

    res.json({ total: itensEnriquecidos.length, items: itensEnriquecidos });
  } catch (err) {
    console.error('[pesquisa/completa] erro', err?.message || err);
    res.status(500).json({ erro: 'Erro na pesquisa completa' });
  }
});

export default router;
