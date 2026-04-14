@echo off
chcp 65001 >nul
color 0A
cls

echo.
echo ============================================================
echo           DEPLOY A VERCEL - DRIZA FRAGANCIAS
echo ============================================================
echo.

REM Install Vercel CLI globally
echo Instalando Vercel CLI...
call npm install -g vercel

echo.
echo ============================================================
echo           INICIANDO DEPLOY
echo ============================================================
echo.
echo Se abrira una ventana del navegador para autenticarse.
echo Sigue los pasos en el navegador.
echo.
pause

REM Run Vercel deploy
vercel

echo.
echo ============================================================
echo                   DEPLOY COMPLETADO!
echo ============================================================
echo.
echo Tu pagina esta online. El link fue mostrado arriba.
echo.
pause
