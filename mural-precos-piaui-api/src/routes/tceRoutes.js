import express from 'express';
import { buscarItensWeb } from '../services/tceService.js';
import cached from '../middleware/cache.js';

const router = express.Router();

router.get(
  '/itens',
  cached(req => `tce:itens:${JSON.stringify(req.query)}`),
  async (req, res) => {
    try {
      console.log('[tceRoutes] req.query =', req.query);

      const { objeto, municipio, orgao, limit, offset } = req.query;

      // ----------------------------
      // 🔹 1) CONSULTA NO TCE
      // ----------------------------
      // O TCE NÃO faz paginação, então sempre pegamos tudo
      const dados = await buscarItensWeb({
        objeto: objeto ?? '',
        municipio: municipio ?? '',
        fonte: 'T',
        tamanhoPagina: 50000, // GRANDE PRA TRAZER TODOS
        paginaOffSet: 0,
        tipoPesquisa: 0
      });

      // ----------------------------
      // 🔹 2) NORMALIZA A LISTA
      // ----------------------------
      let lista =
        (Array.isArray(dados) && dados) ||
        dados?.itens ||
        dados?.content ||
        dados?.results ||
        [];

      if (!Array.isArray(lista)) {
        console.warn('[tceRoutes] lista não era array. Forçando array vazio.');
        lista = [];
      }

      // ----------------------------
      // 🔹 3) FILTRO MUNICÍPIO (igual ao seu)
      // ----------------------------
      if (municipio && municipio.trim() !== '') {
        lista = lista.filter(item =>
          item.municipio?.toLowerCase() === municipio.toLowerCase()
        );
      }

      // ----------------------------
      // 🔹 4) FILTRO POR ÓRGÃO (CORRIGIDO)
      // ----------------------------
      if (orgao && orgao.trim() !== '') {
        const termo = orgao.toLowerCase();
        lista = lista.filter(item =>
          item.nome_ug?.toLowerCase().includes(termo)
        );
      }

      // ----------------------------
      // 🔹 5) PAGINAÇÃO LOCAL
      // ----------------------------
      const LIMIT = Number(limit) || 20;
      const OFFSET = Number(offset) || 0;

      const paginado = lista.slice(OFFSET, OFFSET + LIMIT);

      // ----------------------------
      // 🔹 6) RESPOSTA FINAL
      // ----------------------------
      res.json({
        total: lista.length,
        limite: LIMIT,
        pagina: OFFSET / LIMIT + 1,
        resultados: paginado
      });

    } catch (err) {
      console.error('[tceRoutes] erro', err);
      res.status(500).json({ erro: 'Falha ao consultar TCE-PI', detalhes: err.message });
    }
  }
);

export default router;
