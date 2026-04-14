# DRIZA MDQ FRAGANCIAS - E-commerce

Un elegante sitio web de e-commerce de perfumes construido con Next.js 14, Tailwind CSS y React. Diseño lujoso con paleta de colores negra y dorada, perfectamente responsive y listo para producción.

## Características

- ✨ Diseño elegante y lujo con tema negro/dorado
- 🛒 Carrito de compras funcional con localStorage
- 📱 Completamente responsive (mobile, tablet, desktop)
- 🔍 Filtrado de productos por marca
- 💬 Integración con WhatsApp para consultas y pedidos
- 📧 Formulario de contacto
- ⚡ Optimizado con Next.js 14 y Tailwind CSS
- 🎨 Google Fonts (Playfair Display y Lato)

## Requisitos Previos

- Node.js 18.0 o superior
- npm, yarn, pnpm o bun

## Instalación

1. **Clona o descarga el proyecto:**

```bash
cd "PAGINA DE PRUEBA"
```

2. **Instala las dependencias:**

```bash
npm install
```

O con yarn:

```bash
yarn install
```

## Configuración

### Configurar número de WhatsApp

1. Copia el archivo `.env.local.example` a `.env.local`:

```bash
cp .env.local.example .env.local
```

2. Edita `.env.local` y reemplaza `PLACEHOLDER_WHATSAPP` con tu número de WhatsApp:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=542612345678
```

**Formato:** Tu código de país + número sin espacios ni símbolos.
**Ejemplo para Argentina:** 54 (código) + 2612345678 (número) = 542612345678

### Agregar el logo

1. Crea o coloca tu imagen del logo en `/public/logo.png`
2. El logo será automáticamente utilizado en el header

**Recomendaciones:**
- Tamaño: 200x200px mínimo
- Formato: PNG con fondo transparente
- Estilo: Debe combinar con el diseño lujoso (fondo negro, detalles dorados)

## Ejecución Local

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre tu navegador y ve a [http://localhost:3000](http://localhost:3000)

El sitio se recargará automáticamente cuando hagas cambios.

## Estructura del Proyecto

```
PAGINA DE PRUEBA/
├── app/
│   ├── layout.js           # Layout raíz y metadatos
│   ├── page.js             # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── CartContext.js      # Contexto del carrito (React)
│   ├── Header.jsx          # Encabezado con logo y carrito
│   ├── Hero.jsx            # Sección hero
│   ├── ProductCard.jsx     # Tarjeta de producto individual
│   ├── ProductGrid.jsx     # Grid de productos
│   ├── Cart.jsx            # Sidebar del carrito
│   ├── WhatsAppButton.jsx  # Botón flotante WhatsApp
│   ├── ContactForm.jsx     # Formulario de contacto
│   └── Footer.jsx          # Pie de página
├── lib/
│   └── products.js         # Array de productos y utilidades
├── public/
│   ├── logo.png           # Logo del negocio (coloca aquí tu logo)
│   └── products/          # Directorio para imágenes de productos
├── package.json
├── tailwind.config.js
├── next.config.js
└── .env.local.example
```

## Personalización

### Editar productos

Abre `/lib/products.js` y modifica el array `products`:

```javascript
const products = [
  {
    id: 1,
    name: "Nombre del Perfume",
    brand: "Marca",
    price: 190630,           // Precio en pesos argentinos
    sizes: null,             // null o array de tamaños
    description: "Descripción",
    image: "/products/imagen.jpg"
  },
  // ... más productos
];
```

### Personalizar colores

En `tailwind.config.js`:

```javascript
colors: {
  dark: {
    bg: '#0a0a0a',      // Fondo principal
    card: '#111111',    // Fondo de tarjetas
    text: '#ffffff',    // Texto
    textMuted: '#cccccc',
  },
  gold: {
    primary: '#c9a84c',  // Dorado principal
    light: '#e8c96d',    // Dorado claro
  },
}
```

### Cambiar fuentes

Las fuentes se cargan desde Google Fonts en `app/globals.css`. Puedes cambiarlas modificando la URL de importación.

## Características del Sitio

### Carrito de Compras
- Agregar/quitar productos
- Selector de cantidad
- Selector de tamaño (para productos con múltiples tamaños)
- Almacenamiento persistente en localStorage
- Botón "Confirmar por WhatsApp" que abre una conversación preformulada

### Filtrado por Marca
- Botones para filtrar: All, Calvin Klein, Davidoff, Cuba, Cannon
- Grid dinámico que se actualiza según la selección

### Integración WhatsApp
- Botón flotante en la esquina inferior derecha
- Mensajes preformulados con productos y precios
- Los clientes pueden contactar directamente sin salir del sitio

### Formulario de Contacto
- Campos: Nombre, Email, Mensaje
- Envío por WhatsApp
- Confirmación de envío

## Despliegue

### Desplegar en Vercel (Recomendado)

1. **Conecta tu repositorio:**
   - Crea un repositorio en GitHub
   - Sube los archivos: `git push`

2. **Importa en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Import Project"
   - Selecciona tu repositorio
   - Vercel detectará Next.js automáticamente
   - Click en "Deploy"

3. **Configura variables de entorno:**
   - En el panel de Vercel, ve a "Settings" → "Environment Variables"
   - Agrega: `NEXT_PUBLIC_WHATSAPP_NUMBER` con tu número

### Desplegar Manualmente

1. **Build de producción:**

```bash
npm run build
npm start
```

2. **Deploy a tu servidor:**
   - Usa Docker, FTP, o tu plataforma preferida
   - Asegúrate de que Node.js 18+ esté instalado

## Variables de Entorno

Copia `.env.local.example` a `.env.local` y configura:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=542612345678
```

La variable debe comenzar con `NEXT_PUBLIC_` para estar disponible en el cliente.

## Optimizaciones y Rendimiento

- Next.js 14 con optimizaciones automáticas
- CSS de Tailwind purificado en producción
- Imágenes optimizadas (ready para Next.js Image)
- Sin JavaScript innecesario
- Código componentes optimizado con React 18

## Navegadores Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Solución de Problemas

### El carrito no guarda datos
- Verifica que localStorage esté habilitado en el navegador
- Borra cache y cookies, luego recarga

### WhatsApp no abre
- Revisa que el número esté en formato correcto: código de país + número
- Asegúrate de que la variable `.env.local` esté configurada

### Estilos no se aplican
- Ejecuta `npm run build` nuevamente
- Limpia el cache del navegador (Ctrl+Shift+Delete)

## Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Crea build de producción
npm start        # Inicia servidor de producción
npm run lint     # Ejecuta linter
```

## Licencia

Este proyecto es privado para DRIZA MDQ FRAGANCIAS.

## Soporte

Para cambios en el número de WhatsApp, colores, productos o cualquier personalización, edita los archivos correspondientes y redeploy.

---

**Creado con ❤️ para DRIZA MDQ FRAGANCIAS**

Elegancia, lujo y las mejores fragancias del mundo.
