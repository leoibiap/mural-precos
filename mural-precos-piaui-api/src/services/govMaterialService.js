import axios from 'axios';
const BASE = process.env.GOV_BASE || 'https://dadosabertos.compras.gov.br';

export async function consultarGrupoMaterial(idGrupo) {
  const url = `${BASE}/materiais/v1/grupos/${idGrupo}`;
  const { data } = await axios.get(url);
  return data;
}
