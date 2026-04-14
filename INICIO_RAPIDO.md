# 🚀 INICIO RÁPIDO - DRIZA MDQ FRAGANCIAS

## ✅ Lo que ya está listo

✓ Carpeta del proyecto completa con todos los archivos  
✓ 10 productos configurados  
✓ Logo de DRIZA creado  
✓ 10 imágenes de perfumes  
✓ Carrito de compras funcional  
✓ Botón WhatsApp (1157432540)  
✓ Formulario de contacto  
✓ Diseño lujoso negro/dorado  

## 📦 Requisitos previos

Necesitas tener instalado:
- **Node.js** (versión 16+) - [Descargar aquí](https://nodejs.org/)
- **VS Code** - [Descargar aquí](https://code.visualstudio.com/)
- **Git** (opcional pero recomendado)

### ¿Cómo verificar si tienes Node.js?

Abre CMD/PowerShell y ejecuta:
```bash
node -v
npm -v
```

Si ves versiones, ¡listo! Si no, instala Node.js primero.

---

## 🎯 Pasos para correr la página localmente

### 1️⃣ Abre la carpeta en VS Code
- Abre VS Code
- File → Open Folder
- Selecciona: `C:\Users\neces\Desktop\CLAUDE\PAGINA DE PRUEBA`

### 2️⃣ Abre la terminal en VS Code
- Presiona: `Ctrl + Shift + ñ` (o `Ctrl + J`)
- Verás una terminal en la parte inferior

### 3️⃣ Instala las dependencias
En la terminal, copia y pega:
```bash
npm install
```

Esto descargará Next.js, React, Tailwind CSS, etc. Tarda 2-3 minutos.

### 4️⃣ Inicia el servidor de desarrollo
```bash
npm run dev
```

Verás algo como:
```
> driza-fragancias@0.1.0 dev
> next dev

▲ Next.js 14.2.3
- Local: http://localhost:3000
```

### 5️⃣ Abre en tu navegador
- Abre tu navegador (Chrome, Edge, Firefox)
- Ve a: **http://localhost:3000**

¡La página está corriendo en vivo! 🎉

---

## 🛠️ Cambios que puedes hacer

### Cambiar el logo
1. Reemplaza la imagen en: `public/logo.svg` o `public/logo.png`
2. Recarga la página (F5 en el navegador)

### Reemplazar imágenes de perfumes
1. Descarga imágenes de mejor calidad
2. Colócalas en: `public/products/`
3. Deben tener exactamente estos nombres:
   - `ck-euphoria.jpg`
   - `ck-eternity-edt.jpg`
   - `ck-eternity-edp.jpg`
   - `ck-eternity-flame.jpg`
   - `davidoff-cool-water.jpg`
   - `davidoff-cool-water-parfum.jpg`
   - `cuba-las-vegas.jpg`
   - `cuba-royal.jpg`
   - `cuba-winner.jpg`
   - `danielle-boy.jpg`

### Cambiar colores
Abre: `app/globals.css`
- Busca `#c9a84c` (dorado) y reemplaza con otro color
- Busca `#0a0a0a` (negro) y reemplaza

### Cambiar textos
Abre: `lib/products.js`
- Edita descripciones, precios, nombres
- Guarda el archivo (Ctrl+S)
- La página se actualiza automáticamente

---

## 🌐 Publicar en Vercel (GRATIS)

Una vez que todo esté perfecto localmente, publica online:

### Opción 1: Usando GitHub (Recomendado)

1. **Crea una cuenta en GitHub**
   - Ve a: https://github.com/signup
   - Regístrate con email

2. **Instala Git**
   - Descarga de: https://git-scm.com/
   - Instala normalmente

3. **En tu carpeta del proyecto:**
   ```bash
   git init
   git add .
   git commit -m "DRIZA Fragancias tienda online"
   git branch -M main
   ```

4. **Crea un repositorio en GitHub**
   - Ve a: https://github.com/new
   - Nombre: `driza-fragancias`
   - Click en "Create repository"

5. **Conecta tu carpeta local a GitHub**
   - Copia el comando que GitHub te muestra
   - Pégalo en tu terminal (en la carpeta del proyecto)

6. **Publicar en Vercel:**
   - Ve a: https://vercel.com/signup
   - Haz login con GitHub
   - Haz click en "New Project"
   - Selecciona tu repositorio `driza-fragancias`
   - Click en "Deploy"
   - ¡Listo! Tu sitio está online 🎉

Tu URL será: `https://driza-fragancias.vercel.app` (o personalizada)

### Opción 2: Deploy directo (Más simple, pero menos flexible)

1. Ve a: https://vercel.com/signup
2. Selecciona "Deploy" → "I want to clone a project"
3. Autoriza GitHub/GitLab
4. Sube los archivos manualmente
5. ¡Deploy automático!

---

## 📞 Funciones trabajando

✅ **Catálogo:** Ve todos los perfumes  
✅ **Filtro:** Filtra por marca (Calvin Klein, Davidoff, Cuba, etc)  
✅ **Carrito:** Agrega productos, elige tamaños, ve el total  
✅ **WhatsApp:** Botón flotante abajo a la derecha → manda el carrito por WhatsApp  
✅ **Contacto:** Formulario para consultas (también por WhatsApp)  

---

## ❓ Si algo no funciona

### La página no carga
- ¿Ejecutaste `npm install`? Intenta de nuevo
- ¿El servidor está corriendo? Verifica que veas `- Local: http://localhost:3000`
- Intenta: `npm run dev` nuevamente

### Las imágenes no aparecen
- ¿Están en `public/products/`?
- ¿Tienen exactamente los nombres listados arriba?
- Verifica la ruta en `lib/products.js`

### El WhatsApp no funciona
- Verifica que el número esté bien en: `.env.local`
- El número debe ser: `541157432540` (con código de país)

### Quiero cambiar X cosa
- Pregúntame y te doy instrucciones exactas

---

## 🎯 Próximos pasos

1. **Hoy:** Prueba local (npm run dev)
2. **Mañana:** Publica en Vercel
3. **Después:** Reemplaza imágenes con fotos reales
4. **Luego:** Integra medio de pago (opcional)

---

**¡Tu tienda de perfumes DRIZA está lista!** 🌟

Si necesitas ayuda, pregunta. Estoy aquí para ayudarte.
