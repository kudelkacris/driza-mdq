@echo off
chcp 65001 >nul
color 0A
cls

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║                  🚀 DRIZA FRAGANCIAS - SETUP 🚀                ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
node -v >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js no está instalado!
    echo.
    echo Descargá e instalá desde: https://nodejs.org/
    echo Luego corre este archivo de nuevo.
    echo.
    pause
    exit /b 1
)

echo ✓ Node.js detectado
echo.

REM Install dependencies
echo 📦 Instalando dependencias... (esto tarda 2-3 minutos)
echo.
call npm install
if errorlevel 1 (
    echo ❌ Error en npm install
    pause
    exit /b 1
)

echo.
echo ✓ Dependencias instaladas!
echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║                    ✅ ¡LISTO PARA COMENZAR!                    ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.
echo Ahora tienes 2 opciones:
echo.
echo 1️⃣  OPCIÓN LOCAL (Ver en tu computadora)
echo    Comando: npm run dev
echo    Luego abre: http://localhost:3000
echo.
echo 2️⃣  OPCIÓN VERCEL (Deploy online GRATIS)
echo    Comando: vercel
echo    Sigue los pasos, ¡y listo!
echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo.
echo ¿Qué quieres hacer?
echo.
echo [1] Correr localmente (npm run dev)
echo [2] Deploy a Vercel (vercel)
echo [3] Salir
echo.

set /p choice="Ingresá 1, 2 o 3: "

if "%choice%"=="1" (
    echo.
    echo ▶️  Iniciando servidor local...
    echo.
    call npm run dev
) else if "%choice%"=="2" (
    echo.
    echo ▶️  Instalando Vercel CLI...
    call npm install -g vercel
    echo.
    echo ▶️  Abriendo Vercel...
    call vercel
) else (
    echo.
    echo 👋 ¡Hasta luego!
    exit /b 0
)

pause
