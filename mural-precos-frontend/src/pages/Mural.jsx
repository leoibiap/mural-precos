import { useState, useEffect } from "react";

export const MUNICIPIOS_PI = [
  "Acauã",
  "Agricolândia",
  "Água Branca",
  "Alagoinha do Piauí",
  "Alegrete do Piauí",
  "Alto Longá",
  "Altos",
  "Alvorada do Gurguéia",
  "Amarante",
  "Angical do Piauí",
  "Anísio de Abreu",
  "Antônio Almeida",
  "Aroazes",
  "Aroeiras do Itaim",
  "Arraial",
  "Assunção do Piauí",
  "Avelino Lopes",
  "Baixa Grande do Ribeiro",
  "Barra D'Alcântara",
  "Barras",
  "Barreiras do Piauí",
  "Barro Duro",
  "Batalha",
  "Bela Vista do Piauí",
  "Belém do Piauí",
  "Beneditinos",
  "Bertolínia",
  "Betânia do Piauí",
  "Boa Hora",
  "Bocaina",
  "Bom Jesus",
  "Bom Princípio do Piauí",
  "Bonfim do Piauí",
  "Boqueirão do Piauí",
  "Brasileira",
  "Brejo do Piauí",
  "Buriti dos Lopes",
  "Buriti dos Montes",
  "Cabeceiras do Piauí",
  "Cajazeiras do Piauí",
  "Cajueiro da Praia",
  "Caldeirão Grande do Piauí",
  "Campinas do Piauí",
  "Campo Alegre do Fidalgo",
  "Campo Grande do Piauí",
  "Campo Largo do Piauí",
  "Campo Maior",
  "Canavieira",
  "Canto do Buriti",
  "Capitão de Campos",
  "Capitão Gervásio Oliveira",
  "Caracol",
  "Caraúbas do Piauí",
  "Caridade do Piauí",
  "Castelo do Piauí",
  "Caxingó",
  "Cocal",
  "Cocal de Telha",
  "Cocal dos Alves",
  "Coivaras",
  "Colônia do Gurguéia",
  "Colônia do Piauí",
  "Conceição do Canindé",
  "Coronel José Dias",
  "Corrente",
  "Cristalândia do Piauí",
  "Cristino Castro",
  "Curimatá",
  "Currais",
  "Curralinhos",
  "Curral Novo do Piauí",
  "Demerval Lobão",
  "Dirceu Arcoverde",
  "Dom Expedito Lopes",
  "Domingos Mourão",
  "Dom Inocêncio",
  "Elesbão Veloso",
  "Eliseu Martins",
  "Esperantina",
  "Fartura do Piauí",
  "Flores do Piauí",
  "Floresta do Piauí",
  "Floriano",
  "Francinópolis",
  "Francisco Ayres",
  "Francisco Macedo",
  "Francisco Santos",
  "Fronteiras",
  "Geminiano",
  "Gilbués",
  "Guadalupe",
  "Guaribas",
  "Hugo Napoleão",
  "Ilha Grande",
  "Inhuma",
  "Ipiranga do Piauí",
  "Isaías Coelho",
  "Itainópolis",
  "Itaueira",
  "Jacobina do Piauí",
  "Jaicós",
  "Jardim do Mulato",
  "Jatobá do Piauí",
  "Jerumenha",
  "João Costa",
  "Joaquim Pires",
  "Joca Marques",
  "José de Freitas",
  "Juazeiro do Piauí",
  "Júlio Borges",
  "Jurema",
  "Lagoinha do Piauí",
  "Lagoa Alegre",
  "Lagoa do Barro do Piauí",
  "Lagoa de São Francisco",
  "Lagoa do Piauí",
  "Lagoa do Sítio",
  "Landri Sales",
  "Luís Correia",
  "Luzilândia",
  "Madeiro",
  "Manoel Emídio",
  "Marcolândia",
  "Marcos Parente",
  "Massapê do Piauí",
  "Matias Olímpio",
  "Miguel Alves",
  "Miguel Leão",
  "Milton Brandão",
  "Monsenhor Gil",
  "Monsenhor Hipólito",
  "Monte Alegre do Piauí",
  "Morro Cabeça no Tempo",
  "Morro do Chapéu do Piauí",
  "Murici dos Portelas",
  "Nazaré do Piauí",
  "Nazária",
  "Nossa Senhora de Nazaré",
  "Nossa Senhora dos Remédios",
  "Novo Oriente do Piauí",
  "Novo Santo Antônio",
  "Oeiras",
  "Olho D'Água do Piauí",
  "Padre Marcos",
  "Paes Landim",
  "Pajeú do Piauí",
  "Palmeira do Piauí",
  "Palmeirais",
  "Paquetá",
  "Parnaguá",
  "Parnaíba",
  "Passagem Franca do Piauí",
  "Patos do Piauí",
  "Pau D'Arco do Piauí",
  "Paulistana",
  "Pavussu",
  "Pedro II",
  "Pedro Laurentino",
  "Nova Santa Rita",
  "Picos",
  "Pimenteiras",
  "Pio IX",
  "Piracuruca",
  "Piripiri",
  "Porto",
  "Porto Alegre do Piauí",
  "Prata do Piauí",
  "Queimada Nova",
  "Redenção do Gurguéia",
  "Regeneração",
  "Riacho Frio",
  "Ribeira do Piauí",
  "Ribeiro Gonçalves",
  "Rio Grande do Piauí",
  "Santa Cruz do Piauí",
  "Santa Cruz dos Milagres",
  "Santa Filomena",
  "Santa Luz",
  "Santana do Piauí",
  "Santa Rosa do Piauí",
  "Santo Antônio de Lisboa",
  "Santo Antônio dos Milagres",
  "Santo Inácio do Piauí",
  "São Braz do Piauí",
  "São Félix do Piauí",
  "São Francisco de Assis do Piauí",
  "São Francisco do Piauí",
  "São Gonçalo do Gurguéia",
  "São Gonçalo do Piauí",
  "São João da Canabrava",
  "São João da Fronteira",
  "São João da Serra",
  "São João da Varjota",
  "São João do Arraial",
  "São João do Piauí",
  "São José do Divino",
  "São José do Peixe",
  "São José do Piauí",
  "São Julião",
  "São Lourenço do Piauí",
  "São Luis do Piauí",
  "São Miguel da Baixa Grande",
  "São Miguel do Fidalgo",
  "São Miguel do Tapuio",
  "São Pedro do Piauí",
  "São Raimundo Nonato",
  "Sebastião Barros",
  "Sebastião Leal",
  "Sigefredo Pacheco",
  "Simões",
  "Simplício Mendes",
  "Socorro do Piauí",
  "Sussuapara",
  "Tamboril do Piauí",
  "Tanque do Piauí",
  "Teresina",
  "União",
  "Uruçuí",
  "Valença do Piauí",
  "Várzea Branca",
  "Várzea Grande",
  "Vera Mendes",
  "Vila Nova do Piauí",
  "Wall Ferraz"
];

export const ORGAOS_PI = [
  "SEAD",
  "SEAGRO",
  "SASC",
  "SECEPI",
  "SECID",
  "SECOM",
  "SECULT",
  "SEDEC",
  "SEDUC",
  "SEFAZ",
  "SEFIR",
  "SEGOV",
  "SEID",
  "SEINFRA",
  "SEJUS",
  "SEMARH",
  "SEMPI",
  "SEPLAN",
  "SERES",
  "SESAPI",
  "SSP",
  "SETUR"
];


export default function Mural() {
  const [busca, setBusca] = useState("");
  const [resultado, setResultado] = useState([]);
  const [loading, setLoading] = useState(false);
  const [municipio, setMunicipio] = useState("");
  const [orgao, setOrgao] = useState("");
  const [valorMin, setValorMin] = useState("");
  const [valorMax, setValorMax] = useState("");
  const [filtroMunicipio, setFiltroMunicipio] = useState("");
  const [filtroOrgao, setFiltroOrgao] = useState("");


  async function buscarAPI() {
  if (!busca.trim()) return;

  setLoading(true);
  setResultado([]);

  try {
    const params = new URLSearchParams();

  if (busca.trim()) params.append("objeto", busca);
  if (municipio.trim()) params.append("municipio", municipio);
  if (orgao.trim()) params.append("orgao", orgao);
  if (valorMin.trim()) params.append("valorMin", valorMin);
  if (valorMax.trim()) params.append("valorMax", valorMax);

const url = `http://localhost:3000/tce/itens?${params.toString()}&municipio=${filtroMunicipio}&orgao=${filtroOrgao}`;


    console.log("🔎 URL chamada:", url);

    const res = await fetch(url);
    const data = await res.json();

    console.log("📦 Retorno da API:", data);

    // TENTATIVAS AUTOMÁTICAS DE ENCONTRAR A LISTA
    const possiveisListas = [
      data,
      data?.content,
      data?.lista,
      data?.itens,
      data?.dados,
      data?.results,
      data?.records
    ];

    const listaEncontrada = possiveisListas.find(
      (l) => Array.isArray(l) && l.length > 0
    );

    console.log("📌 Lista encontrada:", listaEncontrada);

    setResultado(listaEncontrada || []);
  } catch (err) {
    console.error("❌ Erro:", err);
  } finally {
    setLoading(false);
  }
}


  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* HEADER */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://www.sead.pi.gov.br/wp-content/uploads/2024/01/logo.svg"
              alt="Brasão"
              className="h-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-green-700">
                Diretoria de Planejamento de Compras Públicas
              </h1>
              <p className="text-sm text-gray-600 -mt-1">
                Superintendencia de Licitações e Contratos
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-green-700">Início</a>
            <a href="#" className="hover:text-green-700">Consultas</a>
            <a href="#" className="hover:text-green-700">Legislação</a>
            <a href="#" className="hover:text-green-700">Sobre</a>
          </nav>
        </div>
      </header>

      {/* BANNER */}
      <section className="bg-gradient-to-r from-green-700 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Mural de Preços do Piauí</h2>
          <p className="text-lg text-white/90 max-w-2xl">
            Transparência para consumidores e empresas. Compare preços, acompanhe
            variações e consulte informações atualizadas.
          </p>

          <div className="mt-8 flex gap-4">
            <input
  type="text"
  placeholder="Buscar produto..."
  value={busca}
  onChange={(e) => setBusca(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && buscarAPI()}
  className="w-full max-w-md px-4 py-3 rounded-lg text-gray-800"
/>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

  {/* MUNICÍPIO */}
  <select
    className="border p-2 rounded"
    value={filtroMunicipio}
    onChange={(e) => setFiltroMunicipio(e.target.value)}
  >
    <option value="">Todos os municípios</option>
    {MUNICIPIOS_PI.map((m, i) => (
      <option key={i} value={m}>{m}</option>
    ))}
  </select>

  {/* ÓRGÃO */}
  <select
    className="border p-2 rounded"
    value={filtroOrgao}
    onChange={(e) => setFiltroOrgao(e.target.value)}
  >
    <option value="">Todos os órgãos</option>
    {ORGAOS_PI.map((o, i) => (
      <option key={i} value={o}>{o}</option>
    ))}
  </select>

  {/* BOTÃO */}
  <button
    onClick={buscarAPI}
    className="bg-blue-600 text-white rounded px-4 py-2"
  >
    Buscar
  </button>
</div>


            <button
              onClick={buscarAPI}
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200"
            >
              Buscar
            </button>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 w-full max-w-3xl">

  <input
    type="text"
    placeholder="Município"
    value={municipio}
    onChange={(e) => setMunicipio(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && buscarAPI()}
    className="px-4 py-2 rounded-lg text-gray-800"
  />

  <input
    type="text"
    placeholder="Órgão"
    value={orgao}
    onChange={(e) => setOrgao(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && buscarAPI()}
    className="px-4 py-2 rounded-lg text-gray-800"
  />

  <input
    type="number"
    placeholder="Valor mínimo"
    value={valorMin}
    onChange={(e) => setValorMin(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && buscarAPI()}
    className="px-4 py-2 rounded-lg text-gray-800"
  />

  <input
    type="number"
    placeholder="Valor máximo"
    value={valorMax}
    onChange={(e) => setValorMax(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && buscarAPI()}
    className="px-4 py-2 rounded-lg text-gray-800"
  />

</div>


        </div>
      </section>


      {/* CARDS DINÂMICOS */}
<section className="mx-auto px-6 py-12 max-w-7xl">

  {loading && (
    <p className="text-gray-700 text-xl font-medium">Carregando...</p>
  )}

  {!loading && resultado.length === 0 && (
    <p className="text-gray-500">Nenhum resultado encontrado.</p>
  )}

  <div className="flex flex-col gap-4 w-full">

    {!loading &&
      resultado.length > 0 &&
      resultado.map((item, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow transition-all"
        >

          {/* Título */}
          <h3
            className="text-lg font-semibold text-gray-900 mb-3 leading-snug"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {item.objeto || "Sem descrição"}
          </h3>

          {/* GRID CLEAN */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {/* Informações */}
            <div className="space-y-1 text-sm text-gray-700">
              <p><span className="font-medium">Órgão:</span> {item.nome_ug || "—"}</p>
              <p><span className="font-medium">Cidade:</span> {item.municipio || "—"}</p>
              <p><span className="font-medium">Quantidade:</span> {item.quantidade || "—"}</p>
            </div>

            {/* Valor */}
            <div className="sm:col-span-1 flex sm:justify-end sm:items-center">
              <div className="text-right">
                <p className="text-gray-500 text-sm">Valor unitário</p>
                <p className="text-green-700 text-2xl font-bold">
                  {item.valor_unitario
                    ? `R$ ${Number(item.valor_unitario).toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}`
                    : "—"}
                </p>
              </div>
            </div>

          </div>

        </div>
      ))}
  </div>
</section>



      {/* FOOTER */}
      <footer className="bg-white border-t py-6 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          © 2025 Governo do Estado do Piauí — SEAD. Todos os direitos reservados.
        </div>
      </footer>

    </div>
  );
}
