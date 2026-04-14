'use client';

import { products, brands } from '@/lib/products';
import ProductCard from './ProductCard';

export default function ProductGrid({ selectedBrand, onBrandChange }) {
  const filteredProducts =
    selectedBrand === 'All'
      ? products
      : products.filter(p => p.brand === selectedBrand);

  return (
    <section id="productos" className="py-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 gold-accent">
          Nuestro Catálogo
        </h2>
        <p className="text-[#cccccc] text-center mb-12 max-w-2xl mx-auto">
          Selecciona entre las mejores marcas de perfumería del mundo
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => onBrandChange(brand)}
              className={`px-6 py-2 rounded-full font-semibold transition-smooth ${
                selectedBrand === brand
                  ? 'gold-bg text-[#0a0a0a]'
                  : 'border border-[#c9a84c] text-[#c9a84c] hover:gold-bg hover:text-[#0a0a0a]'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#cccccc] text-lg">
              No hay productos disponibles para esta marca.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
