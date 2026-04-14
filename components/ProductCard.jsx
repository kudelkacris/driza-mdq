'use client';

import { useState } from 'react';
import { useCart } from './CartContext';
import { formatPrice } from '@/lib/products';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(
    product.sizes ? product.sizes[0].ml : null
  );
  const [isAdded, setIsAdded] = useState(false);

  const displayPrice = selectedSize
    ? product.sizes.find(s => s.ml === selectedSize)?.price || product.price
    : product.price;

  const handleAddToCart = () => {
    addItem(product, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="card-dark rounded-lg overflow-hidden flex flex-col h-full transition-smooth">
      <div className="relative w-full h-64 bg-[#0a0a0a] flex items-center justify-center overflow-hidden border-b border-[#c9a84c]/20">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-4 hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="font-heading text-xl font-bold text-[#ffffff] mb-1">
            {product.name}
          </h3>
          <p className="text-[#c9a84c] text-sm font-semibold mb-3">
            {product.brand}
          </p>
          <p className="text-[#cccccc] text-sm leading-relaxed">
            {product.description}
          </p>
        </div>

        {product.sizes && (
          <div className="mb-4">
            <label className="block text-[#c9a84c] text-sm font-semibold mb-2">
              Tamaño:
            </label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full px-3 py-2 bg-[#0a0a0a] border border-[#c9a84c]/50 rounded text-[#ffffff] text-sm focus:outline-none focus:border-[#c9a84c]"
            >
              {product.sizes.map((size) => (
                <option key={size.ml} value={size.ml}>
                  {size.ml}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mt-auto">
          <div className="mb-4">
            <p className="text-[#cccccc] text-sm mb-1">Precio</p>
            <p className="text-2xl font-heading font-bold gold-accent">
              {formatPrice(displayPrice)}
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-full py-3 rounded-lg font-bold transition-smooth ${
              isAdded
                ? 'gold-bg'
                : 'border border-[#c9a84c] text-[#c9a84c] hover:gold-bg hover:text-[#0a0a0a]'
            }`}
          >
            {isAdded ? '✓ Agregado' : 'Agregar al Carrito'}
          </button>
        </div>
      </div>
    </div>
  );
}
