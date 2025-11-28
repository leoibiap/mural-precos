# mural-precos-piaui-api

API proxy unificada para o Mural de Preços do TCE-PI com enriquecimento opcional pelo Catálogo de Materiais do Governo Federal.

## Recursos
- Rota `/tce/itens` para consultar o endpoint oficial do TCE-PI (`/api/jointce/itensWeb`).
- Rota `/pesquisa/completa` que busca do TCE-PI e enriquece com dados (opcionalmente) do catálogo federal.
- Cache simples para reduzir chamadas ao TCE-PI.
- Swagger UI disponível em `/api-docs`.

## Instalação
```bash
git init
# copie os arquivos para a pasta do projeto se necessário
npm install
cp .env.example .env
npm run dev
```

## Endpoints principais
- `GET /tce/itens` — proxy para o TCE-PI. Parâmetros: objeto, municipio, fonte, tamanhoPagina, paginaOffSet, tipoPesquisa, periodoInicial, periodoFinal
- `GET /pesquisa/completa` — busca itens e faz enriquecimento (configurável)
- `GET /materiais/grupo/:id` — consulta catálogo federal (exemplo)

## Docker
```bash
docker build -t mural-precos-api .
docker run -p 3000:3000 --env-file .env mural-precos-api
```

## Notas
- Use cache e rate limiting em produção.
- Verifique termos de uso do TCE-PI se for uso público em larga escala.
