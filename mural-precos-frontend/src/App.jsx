export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* HEADER */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://www.sead.pi.gov.br/wp-content/uploads/2024/01/logo.svg"
              alt="Brasão"
              className=" h-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-green-700">
                Diretoria de Planejamento de Compras Públicas
              </h1>
              <p className="text-sm text-gray-600 -mt-1">Superintendencia de Licitações e Contratos</p>
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
              className="w-full max-w-md px-4 py-3 rounded-lg text-gray-800"
            />
            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Arroz 5kg", price: "R$ 22,90" },
          { name: "Feijão 1kg", price: "R$ 8,50" },
          { name: "Óleo de soja 900ml", price: "R$ 7,79" },
          { name: "Macarrão 500g", price: "R$ 4,49" },
          { name: "Café 500g", price: "R$ 18,90" },
          { name: "Açúcar 1kg", price: "R$ 4,29" },
        ].map((item) => (
          <div
            key={item.name}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-2xl font-bold text-green-700">{item.price}</p>
            <p className="text-sm text-gray-500 mt-2">Preço médio registrado</p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t py-6 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          © 2025 Governo do Estado do Piauí — SEFAZ. Todos os direitos reservados.
        </div>
      </footer>

    </div>
  );
}
