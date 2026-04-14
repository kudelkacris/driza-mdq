# DRIZA MDQ FRAGANCIAS - Guía de Configuración Rápida

Sigue estos pasos para poner en marcha tu sitio de e-commerce en minutos.

## Paso 1: Instalación (2 minutos)

```bash
# Navega a la carpeta del proyecto
cd "PAGINA DE PRUEBA"

# Instala las dependencias
npm install
```

## Paso 2: Configurar WhatsApp (1 minuto)

1. Abre `.env.local.example` y cópialo como `.env.local`

```bash
cp .env.local.example .env.local
```

2. Edita `.env.local` y reemplaza el número:

```
# ANTES:
NEXT_PUBLIC_WHATSAPP_NUMBER=PLACEHOLDER_WHATSAPP

# DESPUÉS (ejemplo para Argentina):
NEXT_PUBLIC_WHATSAPP_NUMBER=542612345678
```

**Tu número en formato:** Código de país (ej: 54) + Número sin 0 ni espacios

## Paso 3: Agregar Logo (1 minuto)

1. Coloca tu logo en `/public/logo.png`
2. El logo aparecerá automáticamente en el header

**Especificaciones del logo:**
- Formato: PNG con transparencia
- Tamaño recomendado: 200x200px o más
- Estilo: Que combine con lujo (colores oscuros, detalles dorados)

## Paso 4: Ejecutar en Local (1 minuto)

```bash
npm run dev
```

Abre tu navegador en: **http://localhost:3000**

## ¿Todo funcionando? ¡Felicidades!

Ahora puedes:

- **Personalizar productos:** Edita `/lib/products.js`
- **Cambiar colores:** Modifica `tailwind.config.js`
- **Agregar más funcionalidades:** Edita los componentes en `/components/`

## Siguientes pasos

### Para Desarrollo Local
```bash
npm run dev
```
Recarga automática mientras editas.

### Para Build de Producción
```bash
npm run build
npm start
```

### Para Desplegar a Vercel
1. Sube el código a GitHub
2. Ve a vercel.com → Import Project
3. Selecciona tu repositorio
4. Agrega la variable `NEXT_PUBLIC_WHATSAPP_NUMBER` en Settings → Environment Variables
5. ¡Listo! Tu sitio estará en vivo

## Personalización Rápida

### Cambiar nombre de la tienda
Edita `/components/Header.jsx`:
```jsx
<h1 className="font-heading font-bold text-xl gold-accent">
  DRIZA  {/* ← Cambia aquí */}
</h1>
```

### Agregar productos
Edita `/lib/products.js` y agrega objetos al array `products`:
```javascript
{
  id: 11,
  name: "Nuevo Perfume",
  brand: "Marca",
  price: 100000,
  sizes: null,
  description: "Descripción aquí",
  image: "/products/imagen.jpg"
}
```

### Cambiar colores de la marca
Edita `tailwind.config.js`:
```javascript
colors: {
  gold: {
    primary: '#c9a84c',   // ← Dorado principal
    light: '#e8c96d',     // ← Dorado claro
  },
}
```

## Preguntas Frecuentes

**P: ¿Cómo cambio el número de WhatsApp después de publicado?**
A: Edita `.env.local` con el nuevo número y redeploy.

**P: ¿Puedo agregar más productos?**
A: Sí, edita `/lib/products.js` y agrega más items al array.

**P: ¿Cómo agrego imágenes reales de productos?**
A: Coloca las imágenes en `/public/products/` y actualiza la ruta en `/lib/products.js`.

**P: ¿El carrito funciona sin backend?**
A: Sí, usa localStorage. Los datos se guardan en el navegador del usuario.

**P: ¿Cómo integro un sistema de pagos?**
A: Actualmente usa WhatsApp. Para pagos en línea, necesitarías agregar Mercado Pago, Stripe, etc.

## Archivos Importantes

| Archivo | Propósito |
|---------|-----------|
| `/lib/products.js` | Lista de productos |
| `/components/Header.jsx` | Encabezado y logo |
| `tailwind.config.js` | Colores y temas |
| `.env.local` | Número de WhatsApp |
| `/public/logo.png` | Tu logo |

## Soporte Técnico

Si necesitas ayuda:
1. Revisa el README.md para documentación completa
2. Verifica que Node.js 18+ esté instalado: `node --version`
3. Borra `node_modules` e instala nuevamente: `rm -rf node_modules && npm install`

---

**¡Tu sitio está listo para usar!** 🚀
