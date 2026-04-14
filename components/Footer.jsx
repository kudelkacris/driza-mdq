export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#c9a84c]/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#c9a84c] rounded-full flex items-center justify-center">
                <span className="text-[#0a0a0a] font-heading font-bold text-sm">D</span>
              </div>
              <span className="font-heading font-bold gold-accent">DRIZA MDQ</span>
            </div>
            <p className="text-[#cccccc] text-sm">
              Fragancias de lujo para quienes aprecian la calidad y la distinción.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[#ffffff] mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-sm text-[#cccccc]">
              <li>
                <a href="#productos" className="hover:text-[#c9a84c] transition-smooth">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#c9a84c] transition-smooth">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#c9a84c] transition-smooth">
                  Inicio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[#ffffff] mb-4">
              Síguenos
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[#c9a84c] hover:text-[#e8c96d] transition-smooth"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#c9a84c] hover:text-[#e8c96d] transition-smooth"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.265-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.695.278.273 2.71.07 7.052.012 8.33 0 8.756 0 12s.012 3.669.07 4.948c.203 4.342 2.625 6.774 6.967 6.977C8.33 23.988 8.756 24 12 24s3.668-.012 4.947-.07c4.358-.203 6.783-2.627 6.978-6.978.058-1.28.07-1.706.07-4.947s-.012-3.669-.07-4.947c-.195-4.357-2.625-6.78-6.979-6.978C15.668.012 15.24 0 12 0z" />
                  <circle cx="12" cy="12" r="3.6" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#c9a84c] hover:text-[#e8c96d] transition-smooth"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.41 2.119 7.746l-2.26 7.286 7.45-2.254c2.267 1.266 4.838 1.932 7.535 1.932 9.759 0 17.716-7.923 17.716-17.698 0-4.724-1.882-9.159-5.297-12.501-3.414-3.343-7.977-5.197-12.816-5.197z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#c9a84c]/20 pt-8 text-center text-[#cccccc] text-sm">
          <p>
            © {currentYear} DRIZA MDQ FRAGANCIAS. Todos los derechos reservados.
          </p>
          <p className="mt-2">
            Fragancias de lujo | Mar del Plata, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
