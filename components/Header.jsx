'use client';

import { useCart } from './CartContext';
import Link from 'next/link';

export default function Header({ onCartClick }) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-40 bg-[#0a0a0a] border-b border-[#c9a84c]/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="DRIZA Logo"
            className="h-10 w-10 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="w-10 h-10 bg-[#c9a84c] rounded-full flex items-center justify-center">
            <span className="text-[#0a0a0a] font-heading font-bold text-lg">D</span>
          </div>
          <div>
            <h1 className="font-heading font-bold text-xl gold-accent">
              DRIZA
            </h1>
            <p className="text-[#cccccc] text-xs">MDQ FRAGANCIAS</p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <Link
            href="#productos"
            className="text-[#cccccc] hover:text-[#c9a84c] transition-smooth"
          >
            Productos
          </Link>
          <Link
            href="#contacto"
            className="text-[#cccccc] hover:text-[#c9a84c] transition-smooth"
          >
            Contacto
          </Link>
        </nav>

        <button
          onClick={onCartClick}
          className="relative flex items-center gap-2 px-4 py-2 rounded-lg border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-smooth"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8m10 0l2-8m-10 8h8m0 0a1 1 0 001-1m-1 1a1 1 0 00-1-1m0 0h-4"
            />
          </svg>
          <span className="text-sm font-semibold">
            {totalItems > 0 ? `${totalItems}` : 'Carrito'}
          </span>
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 w-5 h-5 bg-[#c9a84c] rounded-full flex items-center justify-center text-[#0a0a0a] text-xs font-bold">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
