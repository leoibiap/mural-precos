// services/tceService.js
import axios from 'axios';

const TCE_BASE = 'https://sistemas.tce.pi.gov.br/api/jointce/itensWeb';

export async function buscarItensWeb(opts = {}) {
  // opts: { objeto, periodoInicial, periodoFinal, tamanhoPagina, paginaOffSet, tipoPesquisa, municipio, fonte }
  const params = {
    objeto: opts.objeto ?? '',
    periodoInicial: opts.periodoInicial ?? '',
    periodoFinal: opts.periodoFinal ?? '',
    municipio: opts.municipio ?? '',
    fonte: opts.fonte ?? 'T',
    tamanhoPagina: opts.tamanhoPagina ?? (opts.limit ? Number(opts.limit) : 100000),
    paginaOffSet: opts.paginaOffSet ?? 0,
    tipoPesquisa: opts.tipoPesquisa ?? 0
  };

  // Log de debug (útil para desenvolvimento)
  console.log('[tceService] solicitando TCE com params:', params);

  try {
    const resp = await axios.get(TCE_BASE, {
      params,
      timeout: 30000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MuralPrecos/1.0)',
        Accept: 'application/json, text/plain, */*'
      },
      // descomente se precisar seguir redirecionamentos ou ajustar
      maxRedirects: 5
    });

    // O TCE às vezes retorna um objeto com "itens" ou "content" ou array direto
    const data = resp.data || {};

    // debug
    console.log('[tceService] resposta recebida do TCE, chaves:', Object.keys(data));

    // Normaliza saída para sempre retornar um array
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.itens)) return data.itens;
    if (Array.isArray(data.content)) return data.content;
    if (Array.isArray(data.results)) return data.results;
    // Se o objeto inteiro tem itens dentro de alguma chave
    // fallback: look for first array value
    for (const k of Object.keys(data)) {
      if (Array.isArray(data[k])) return data[k];
    }

    // Se não achou array, retorna o objeto bruto (caller deve tratar)
    return data;
  } catch (err) {
    console.error('[tceService] erro ao consultar TCE:', err && err.message ? err.message : err);
    // inclui mais info em dev
    if (err.response) {
      console.error('[tceService] status:', err.response.status, 'data:', err.response.data);
    }
    // retorna objeto com erro para o controller poder detectar
    throw new Error('Falha ao consultar TCE-PI: ' + (err.response?.status || err.message));
  }
}
