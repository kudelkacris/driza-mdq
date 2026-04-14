import './globals.css';
import { CartProvider } from '@/components/CartContext';

export const metadata = {
  title: 'DRIZA MDQ FRAGANCIAS - Perfumes de Lujo',
  description: 'Descubre las mejores fragancias de lujo en DRIZA MDQ FRAGANCIAS. Marcas premium como Calvin Klein, Davidoff, Cuba y más.',
  keywords: 'perfumes, fragancias, lujo, Calvin Klein, Davidoff, Cuba, Mar del Plata',
  authors: [{ name: 'DRIZA MDQ FRAGANCIAS' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
