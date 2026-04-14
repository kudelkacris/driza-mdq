export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#111111] to-[#0a0a0a] py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-96 h-96 bg-[#c9a84c] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#e8c96d] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-[#c9a84c] to-[#e8c96d] rounded-full flex items-center justify-center shadow-lg shadow-[#c9a84c]/50">
            <span className="font-heading font-bold text-5xl text-[#0a0a0a]">D</span>
          </div>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4 gold-accent">
          DRIZA MDQ
        </h1>

        <p className="font-heading text-2xl md:text-3xl text-[#cccccc] mb-6">
          FRAGANCIAS
        </p>

        <p className="text-lg md:text-xl text-[#cccccc] max-w-2xl mx-auto mb-12 leading-relaxed">
          Descubre el mundo de los perfumes de lujo. Marcas premium, fragancias exclusivas y aromas que cuentan historias.
        </p>

        <a
          href="#productos"
          className="inline-block px-8 py-3 gold-bg rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#c9a84c]/50 transition-smooth"
        >
          Explorar Catálogo
        </a>
      </div>
    </section>
  );
}
