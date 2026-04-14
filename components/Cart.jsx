'use client';

import { useCart } from './CartContext';
import { formatPrice } from '@/lib/products';
import { useState } from 'react';

export default function Cart({ isOpen, onClose }) {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } =
    useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirmOrder = () => {
    if (items.length === 0) return;

    setIsProcessing(true);

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '541157432540';

    const cartMessage = items
      .map(
        (item) =>
          `${item.name}${item.selectedSize ? ` (${item.selectedSize})` : ''} x${item.quantity} - ${formatPrice(item.price)}`
      )
      .join('%0A');

    const totalPrice = formatPrice(getTotalPrice());

    const message = `Hola! Me interesa hacer un pedido de DRIZA MDQ FRAGANCIAS:%0A%0A${cartMessage}%0A%0ATotal: ${totalPrice}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');

    clearCart();
    onClose();
    setIsProcessing(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 transition-opacity"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-[#111111] border-l border-[#c9a84c] z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-[#c9a84c]/20">
            <h2 className="font-heading text-2xl font-bold gold-accent">
              Tu Carrito
            </h2>
            <button
              onClick={onClose}
              className="text-[#cccccc] hover:text-[#c9a84c] transition-smooth"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <p className="text-[#cccccc] text-center py-8">
                Tu carrito está vacío
              </p>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}`}
                  className="card-dark p-4 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-[#ffffff]">
                        {item.name}
                      </h3>
                      <p className="text-[#c9a84c] text-sm">{item.brand}</p>
                      {item.selectedSize && (
                        <p className="text-[#cccccc] text-xs">
                          Tamaño: {item.selectedSize}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.selectedSize)}
                      className="text-[#cccccc] hover:text-[#c9a84c] transition-smooth"
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="gold-accent font-bold">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedSize,
                            item.quantity - 1
                          )
                        }
                        className="px-2 py-1 border border-[#c9a84c] text-[#c9a84c] rounded hover:gold-bg hover:text-[#0a0a0a] transition-smooth"
                      >
                        -
                      </button>
                      <span className="text-[#ffffff] font-semibold w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedSize,
                            item.quantity + 1
                          )
                        }
                        className="px-2 py-1 border border-[#c9a84c] text-[#c9a84c] rounded hover:gold-bg hover:text-[#0a0a0a] transition-smooth"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-[#c9a84c]/20 p-6 space-y-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="gold-accent">Total:</span>
                <span className="gold-accent">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>

              <button
                onClick={handleConfirmOrder}
                disabled={isProcessing}
                className="w-full py-3 gold-bg rounded-lg font-bold hover:shadow-lg hover:shadow-[#c9a84c]/50 transition-smooth disabled:opacity-50"
              >
                {isProcessing ? 'Procesando...' : 'Confirmar por WhatsApp'}
              </button>

              <button
                onClick={onClose}
                className="w-full py-3 border border-[#c9a84c] text-[#c9a84c] rounded-lg font-bold hover:gold-bg hover:text-[#0a0a0a] transition-smooth"
              >
                Continuar Comprando
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
