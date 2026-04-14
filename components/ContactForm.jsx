'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '541157432540';
      const message = `Nuevo mensaje de contacto:%0A%0ANombre: ${encodeURIComponent(
        formData.name
      )}%0AEmail: ${encodeURIComponent(
        formData.email
      )}%0AMensaje: ${encodeURIComponent(formData.message)}`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

      window.open(whatsappUrl, '_blank');

      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto card-dark p-8 rounded-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-[#c9a84c] font-semibold mb-2">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a84c]/30 rounded-lg text-[#ffffff] placeholder-[#cccccc]/50 focus:outline-none focus:border-[#c9a84c] transition-smooth"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label className="block text-[#c9a84c] font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a84c]/30 rounded-lg text-[#ffffff] placeholder-[#cccccc]/50 focus:outline-none focus:border-[#c9a84c] transition-smooth"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-[#c9a84c] font-semibold mb-2">
          Mensaje
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a84c]/30 rounded-lg text-[#ffffff] placeholder-[#cccccc]/50 focus:outline-none focus:border-[#c9a84c] transition-smooth resize-none"
          placeholder="Tu mensaje..."
        />
      </div>

      {isSubmitted && (
        <div className="mb-4 p-4 bg-[#c9a84c]/20 border border-[#c9a84c] rounded-lg text-[#c9a84c] text-center font-semibold">
          Mensaje enviado por WhatsApp. ¡Pronto nos pondremos en contacto!
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 gold-bg rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#c9a84c]/50 transition-smooth disabled:opacity-50"
      >
        {isLoading ? 'Enviando...' : 'Enviar Mensaje por WhatsApp'}
      </button>

      <p className="text-[#cccccc] text-sm text-center mt-4">
        También puedes contactarnos directamente por WhatsApp usando el botón en la esquina inferior derecha.
      </p>
    </form>
  );
}
