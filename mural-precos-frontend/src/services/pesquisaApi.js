import api from "./api";

export async function buscarProduto(produto) {
  try {
    const response = await api.get("/pesquisa/completa", {
      params: { objeto: produto }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return [];
  }
}
