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
      const params = {
        objeto: req.query.objeto || '',
        municipio: req.query.municipio || '',
        fonte: req.query.fonte || 'T',
        tamanhoPagina: req.query.tamanhoPagina || process.env.DEFAULT_PAGE_SIZE || 100000,
        paginaOffSet: req.query.paginaOffSet || 0,
        tipoPesquisa: req.query.tipoPesquisa || 0,
        periodoInicial: req.query.periodoInicial,
        periodoFinal: req.query.periodoFinal,
      };

      const data = await buscarItensWeb(params);
      res.json(data);
    } catch (err) {
      console.error('[tceRoutes] erro', err?.message || err);
      res.status(500).json({ erro: 'Falha ao consultar TCE-PI' });
    }
  });

export default router;
