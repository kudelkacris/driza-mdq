'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product, selectedSize = null) => {
    const itemKey = selectedSize ? `${product.id}-${selectedSize}` : product.id;
    const existingItem = items.find(
      item => item.id === product.id && item.selectedSize === selectedSize
    );

    if (existingItem) {
      setItems(
        items.map(item =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      const price = selectedSize
        ? product.sizes.find(s => s.ml === selectedSize)?.price || product.price
        : product.price;

      setItems([
        ...items,
        {
          id: product.id,
          name: product.name,
          brand: product.brand,
          price: price,
          quantity: 1,
          selectedSize: selectedSize,
          image: product.image,
        },
      ]);
    }
  };

  const removeItem = (id, selectedSize = null) => {
    setItems(
      items.filter(
        item => !(item.id === id && item.selectedSize === selectedSize)
      )
    );
  };

  const updateQuantity = (id, selectedSize = null, quantity) => {
    if (quantity <= 0) {
      removeItem(id, selectedSize);
      return;
    }
    setItems(
      items.map(item =>
        item.id === id && item.selectedSize === selectedSize
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        getTotalPrice,
        getTotalItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
