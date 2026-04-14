'use client';

export default function WhatsAppButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '541157432540';

  const handleClick = () => {
    const message = 'Hola! Me interesa conocer más sobre los perfumes de DRIZA MDQ FRAGANCIAS';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full gold-bg flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-[#c9a84c]/50 transition-smooth z-30 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        className="w-7 h-7 text-[#0a0a0a]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.41 2.119 7.746l-2.26 7.286 7.45-2.254c2.267 1.266 4.838 1.932 7.535 1.932 9.759 0 17.716-7.923 17.716-17.698 0-4.724-1.882-9.159-5.297-12.501-3.414-3.343-7.977-5.197-12.816-5.197z" />
      </svg>
    </button>
  );
}
