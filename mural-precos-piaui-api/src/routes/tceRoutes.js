import express from 'express';
import { buscarItensWeb } from '../services/tceService.js';
import cached from '../middleware/cache.js';

const router = express.Router();

/**
 * @openapi
 * /tce/itens:
 *   get:
 *     summary: Proxy para o endpoint itensWeb do TCE-PI
 *     parameters:
 *       - in: query
 *         name: objeto
 *         schema:
 *           type: string
 *       - in: query
 *         name: periodoInicial
 *         schema:
 *           type: string
 *       - in: query
 *         name: periodoFinal
 *         schema:
 *           type: string
 *       - in: query
 *         name: tamanhoPagina
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de itens
 */
router.get('/itens',
  cached(req => `tce:itens:${JSON.stringify(req.query)}`),
  async (req, res) => {
    try {
  console.log('[tceRoutes] req.query =', req.query);

  const params = {
    objeto: req.query.objeto || '',
    periodoInicial: req.query.periodoInicial,
    periodoFinal: req.query.periodoFinal,
    municipio: req.query.municipio || '',
    tamanhoPagina: req.query.limit ? Number(req.query.limit) : undefined
  };

  const data = await buscarItensWeb(params);

  // normalização defensiva (pode ser array ou objeto)
  let lista = Array.isArray(data) ? data : data?.content || data?.itens || data || [];

  if (!Array.isArray(lista)) lista = [];
  
      // Agora filtra manualmente
      const municipio = req.query.municipio?.trim();
      const orgao = req.query.orgao?.trim();

      if (municipio) {
        lista = lista.filter(i =>
          i.municipio?.toLowerCase() === municipio.toLowerCase()
        );
      }

      if (orgao) {
        lista = lista.filter(i =>
          i.nome_ug?.toLowerCase().includes(orgao.toLowerCase())
        );
      }

      res.json(lista);
    } catch (err) {
      console.error('[tceRoutes] erro', err);
      res.status(500).json({ erro: 'Falha ao consultar TCE-PI' });
    }
  });


export default router;
