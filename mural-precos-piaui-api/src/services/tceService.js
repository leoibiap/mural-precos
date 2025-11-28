import axios from 'axios';

const BASE = process.env.TCE_BASE || 'https://sistemas.tce.pi.gov.br/api/jointce';

export async function buscarItensWeb(params) {
  const url = `${BASE}/itensWeb`;
  const response = await axios.get(url, { params, timeout: 30000 });
  return response.data;
}
