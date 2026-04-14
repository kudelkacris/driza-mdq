'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import ContactForm from '@/components/ContactForm';
import Cart from '@/components/Cart';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('All');

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Header onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <ProductGrid
        selectedBrand={selectedBrand}
        onBrandChange={setSelectedBrand}
      />
      <section id="contacto" className="py-16 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 gold-accent">
            Contáctanos
          </h2>
          <ContactForm />
        </div>
      </section>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
