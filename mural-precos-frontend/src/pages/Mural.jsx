export default function Mural() {
  return (
    <div className="min-h-screen bg-blueLight">
      
      {/* HEADER */}
      <header className="bg-primary py-6 px-10 text-white flex items-center gap-4">
        <img src="/logo.png" alt="Logo" className="h-16" />
        <h1 className="text-3xl font-bold tracking-wide">
          PAINEL DE PREÇOS PÚBLICOS
        </h1>
      </header>

      {/* FILTROS */}
      <section className="bg-white shadow-md rounded-lg p-8 mx-6 mt-6">
        <h2 className="text-lg font-semibold mb-6 text-gray-700">
          Selecione o(s) Filtro(s) e depois clique em pesquisar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Objeto */}
          <div>
            <label className="font-medium text-gray-600">Objeto:</label>
            <input
              type="text"
              placeholder="Descrição..."
              className="mt-1 w-full border rounded-lg p-3"
            />
          </div>

          {/* Data Início */}
          <div>
            <label className="font-medium text-gray-600">Data de Início:</label>
            <input
              type="date"
              className="mt-1 w-full border rounded-lg p-3"
            />
          </div>

          {/* Data Fim */}
          <div>
            <label className="font-medium text-gray-600">Data Fim:</label>
            <input
              type="date"
              className="mt-1 w-full border rounded-lg p-3"
            />
          </div>

          {/* Município */}
          <div>
            <label className="font-medium text-gray-600">Município:</label>
            <input
              type="text"
              placeholder="Informe a cidade de origem"
              className="mt-1 w-full border rounded-lg p-3"
            />
          </div>

          {/* Raio */}
          <div>
            <label className="font-medium text-gray-600">Raio(Km):</label>
            <input
              type="number"
              placeholder="Informe o raio em Km"
              className="mt-1 w-full border rounded-lg p-3"
            />
          </div>

          {/* Unidade */}
          <div>
            <label className="font-medium text-gray-600">Unidade de Medida:</label>
            <input
              type="text"
              placeholder="Informe o tipo de unidade"
              className="mt-1 w-full border rounded-lg p-3"
            />
          </div>

          {/* Fonte */}
          <div>
            <label className="font-medium text-gray-600">Fonte:</label>
            <select className="mt-1 w-full border rounded-lg p-3">
              <option>Todos</option>
            </select>
          </div>
        </div>

        {/* Radios */}
        <div className="mt-6 flex items-center gap-6 text-gray-700">
          <label>
            <input type="radio" name="precos" defaultChecked className="mr-2" />
            Todos os preços
          </label>

          <label>
            <input type="radio" name="precos" className="mr-2" />
            Excluir preços duplicados
          </label>
        </div>

        {/* Botões */}
        <div className="mt-8 flex gap-4">
          <button className="bg-primary text-white px-6 py-3 rounded-lg">
            Pesquisar
          </button>

          <button className="border px-6 py-3 rounded-lg">
            Limpar
          </button>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="bg-white shadow-md rounded-lg p-6 mx-6 my-8">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Resultados</h2>

        <div className="text-center text-gray-500 py-10">
          Nenhum resultado a ser exibido.
        </div>
      </section>
    </div>
  );
}
