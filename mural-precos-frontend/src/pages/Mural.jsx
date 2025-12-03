import { useState, useEffect } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";


export const MAPA_SIGLAS = {
  SEAD: "SECRETARIA DE ADMINISTRAÇÃO",
  CBMEPI: "CORPO DE BOMBEIROS MILITAR DO ESTADO DO PIAUÍ",
  COOJUV: "COORDENADORIA DA JUVENTUDE DO ESTADO DO PIAUÍ",
  CCOM: "COORDENADORIA DE COMUNICAÇÃO SOCIAL DO PIAUÍ",
  ADH: "AGÊNCIA DE DESENVOLVIMENTO HABITACIONAL DO PIAUÍ",
  IASPI: "INSTITUTO DE ASSISTÊNCIA À SAÚDE DOS SERVIDORES PÚBLICOS DO ESTADO DO PIAUÍ",
  PC: "DELEGACIA GERAL DA POLÍCIA CIVIL DA SECRETARIA DE SEGURANÇA PÚBLICA",
  SEAGRO: "SECRETARIA DE ESTADO DO AGRONEGÓCIO E EMPREENDEDORISMO RURAL",
  SECEPI: "SECRETARIA DE ESTADO DOS ESPORTES",
  SSP: "SECRETARIA DE ESTADO DA SEGURANÇA PÚBLICA",
  IDEPI: "INSTITUTO DE DESENVOLVIMENTO DO PIAUÍ",
  PM: "POLÍCIA MILITAR DO ESTADO DO PIAUÍ",
  SETUR: "SECRETARIA DE ESTADO DO TURISMO",
  ISBPI: "INSTITUTO DO SANEAMENTO BÁSICO DO PIAUÍ",
  PGE: "PROCURADORIA-GERAL DO ESTADO DO PIAUÍ",
  SEPLAN: "SECRETARIA DE ESTADO DO PLANEJAMENTO",
  VICEGOV: "VICE-GOVERNADORIA DO ESTADO DO PIAUÍ",
  SEFIR: "SECRETARIA DA IRRIGAÇÃO E INFRAESTRUTURA HÍDRICA DO ESTADO DO PIAUÍ",
  ADAPI: "AGÊNCIA DE DEFESA AGROPECUÁRIA DO ESTADO DO PIAUÍ",
  PIAUIPREV: "FUNDAÇÃO PIAUÍ PREVIDÊNCIA",
  SEDEC: "SECRETARIA DE ESTADO DA DEFESA CIVIL",
  SEMARH: "SECRETARIA DE ESTADO DO MEIO AMBIENTE E RECURSOS HÍDRICOS",
  CENDFOL: "COORDENADORIA ESTADUAL DE ENFRENTAMENTO ÀS DROGAS E FOMENTO AO LAZER",
  FAPEPI: "FUNDAÇÃO DE AMPARO À PESQUISA DO ESTADO DO PIAUÍ",
  FUESPI: "FUNDAÇÃO UNIVERSIDADE ESTADUAL DO PIAUÍ",
  SEGOV: "SECRETARIA DE GOVERNO",
  SASC: "SECRETARIA DO DESENVOLVIMENTO E ASSISTÊNCIA SOCIAL, FAMÍLIA E COMBATE À FOME"
};


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
const [orgaosAPI, setOrgaosAPI] = useState([]);

useEffect(() => {
  async function load() {
    const lista = await carregarOrgaosDaAPI();
    setOrgaosAPI(lista);
  }
  load();
}, []);


async function carregarOrgaosDaAPI() {
  try {
    const url = "http://localhost:3000/tce/itens?limit=50000";
    const resp = await fetch(url);
    const data = await resp.json();

    const listaAPI = Array.isArray(data)
      ? data
      : data?.content || data?.itens || data || [];

    const orgaosSet = new Set();

    listaAPI.forEach(item => {
      if (item.nome_ug) {
        orgaosSet.add(item.nome_ug.trim());
      }
    });

    return Array.from(orgaosSet).sort();

  } catch (e) {
    console.error("Erro ao carregar órgãos:", e);
    return [];
  }
}


function traduzirOrgao(sigla) {
  if (!sigla) return "";
  return MAPA_SIGLAS[sigla] || "";
}

 async function buscarAPI() {
  setLoading(true);
  setResultado([]);

  try {
    const params = new URLSearchParams();

    // Objeto
    if (busca && busca.trim()) {
      params.append("objeto", busca.trim());
    }

    // Município
    if (municipio && municipio.trim()) {
      params.append("municipio", municipio.trim());
    }

    // Órgão — converte sigla → nome
    if (orgao && orgao.trim()) {
  params.append("orgao", orgao.trim());
}


    // Valores
    if (valorMin && valorMin.trim()) {
      params.append("valorMin", valorMin.trim());
    }
    if (valorMax && valorMax.trim()) {
      params.append("valorMax", valorMax.trim());
    }

    // Monta URL somente com parâmetros preenchidos
    const url = `http://localhost:3000/tce/itens?${params.toString()}`;
    console.log("🔎 URL CHAMADA:", url);

    const res = await fetch(url);
    const data = await res.json();

    console.log("📦 RETORNO DA API:", data);

    // Tenta localizar lista automaticamente
    const lista =
      (Array.isArray(data) && data) ||
      data?.content ||
      data?.lista ||
      data?.itens ||
      data?.dados ||
      data?.results ||
      data?.records ||
      [];

    setResultado(lista);
  } catch (err) {
    console.error("❌ ERRO:", err);
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

            <button
              onClick={buscarAPI}
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200"
            >
              Buscar
            </button>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 w-full max-w-3xl">

  {/* SELECT MUNICÍPIO */}
<select
  className="px-4 py-2 rounded-lg text-gray-800 border"
  value={municipio}
  onChange={(e) => setMunicipio(e.target.value)}
>
  <option value="">Municípios</option>
  {MUNICIPIOS_PI.map((m, i) => (
    <option key={i} value={m}>{m}</option>
  ))}
</select>

{/* SELECT ÓRGÃO */}
<select
  className="px-4 py-2 rounded-lg text-gray-800 border"
  value={orgao}
  onChange={(e) => setOrgao(e.target.value)}
>
  <option value="">Órgãos</option>

  {orgaosAPI.map((o, index) => (
    <option key={index} value={o}>
      {o}
    </option>
  ))}
</select>


  <input
    type="number"
    placeholder="Valor Mínimo"
    value={valorMin}
    onChange={(e) => setValorMin(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && buscarAPI()}
    className="px-4 py-2 rounded-lg text-gray-800"
  />

  <input
    type="number"
    placeholder="Valor Máximo"
    value={valorMax}
    onChange={(e) => setValorMax(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && buscarAPI()}
    className="px-3 py-2 rounded-lg text-gray-800"
  />

</div>


        </div>
      </section>


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
  className="
    bg-white
    px-4 py-4
    border border-gray-300
    shadow-sm
    rounded-md
    w-full
    max-w-7xl
    mx-auto
    mb-4
  "
>


      {/* TÍTULO – ESTILO TCE */}
      <p className="font-semibold text-gray-900 text-sm leading-relaxed mb-4 uppercase">
  {item.objeto || "DESCRIÇÃO NÃO INFORMADA"}
</p>


      {/* CAMPOS – ESTILO TCE */}
      <div className="text-sm text-gray-800 space-y-1">

        <p>
          <strong>Órgão:</strong> {item.nome_ug || "Não informado"}
        </p>

        <p>
          <strong>Instrumento:</strong> {item.instrumento || "Não informado"}
        </p>

        <p>
          <strong>Cidade:</strong> {item.municipio || "Não informado"}
        </p>

        <p>
          <strong>Quantidade:</strong> {item.quantidade || "—"}
        </p>

        <p>
          <strong>Data:</strong> {item.data || "—"}
        </p>

        <p>
          <strong>Situação:</strong> {item.situacao || "—"}
        </p>
      </div>

{/* Ícone de Olho igual ao TCE */}
<div className="flex justify-between items-start gap-4">
  <button
    onClick={() =>
      window.open(
        `https://sistemas.tce.pi.gov.br/muralcon/detalheContrato.xhtml?id=${item.id_fonte}`,
        "_blank"
      )
    }
    className="p-2 rounded-lg hover:bg-gray-100 transition"
    title="Ver detalhes"
  >
    <EyeIcon className="w-6 h-6 text-blue-600 hover:text-blue-800" />
  </button>
</div>




      {/* VALOR UNITÁRIO*/}
      <div className="mt-4 flex justify-end">
  <div className="text-right">
    <p className="text-gray-600 text-sm">Valor unitário</p>
    <p className="text-green-700 text-xl font-bold">
      {item.valor_unitario
        ? `R$ ${Number(item.valor_unitario).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}`
        : "—"}
    </p>
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
