# Script de configuration automatique pour Windows PowerShell

Write-Host "🚀 Configuration du projet Kushtati E-Commerce..." -ForegroundColor Cyan
Write-Host ""

# Vérifier Node.js
Write-Host "✓ Vérification de Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "  Node.js installé : $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "  ❌ Node.js n'est pas installé. Veuillez l'installer depuis https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Vérifier npm
Write-Host "✓ Vérification de npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "  npm installé : $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "  ❌ npm n'est pas installé." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📦 Installation des dépendances..." -ForegroundColor Cyan
Write-Host ""

# Installation du backend
Write-Host "1️⃣  Installation du backend..." -ForegroundColor Yellow
Set-Location backend
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "  ✅ Backend installé avec succès" -ForegroundColor Green
} else {
    Write-Host "  ❌ Erreur lors de l'installation du backend" -ForegroundColor Red
    Set-Location ..
    exit 1
}
Set-Location ..

Write-Host ""

# Installation du frontend
Write-Host "2️⃣  Installation du frontend..." -ForegroundColor Yellow
Set-Location frontend
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "  ✅ Frontend installé avec succès" -ForegroundColor Green
} else {
    Write-Host "  ❌ Erreur lors de l'installation du frontend" -ForegroundColor Red
    Set-Location ..
    exit 1
}
Set-Location ..

Write-Host ""
Write-Host "✅ Installation terminée avec succès !" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Prochaines étapes :" -ForegroundColor Cyan
Write-Host "  1. Configurez PostgreSQL et créez la base de données 'ecommerce'" -ForegroundColor White
Write-Host "  2. Mettez à jour backend/.env avec vos informations de connexion" -ForegroundColor White
Write-Host "  3. Mettez à jour frontend/.env.local avec vos clés Stripe" -ForegroundColor White
Write-Host "  4. Exécutez les migrations : cd backend ; npm run prisma:migrate" -ForegroundColor White
Write-Host "  5. Peuplez la base : cd backend ; npm run seed" -ForegroundColor White
Write-Host "  6. Démarrez le backend : cd backend ; npm run dev" -ForegroundColor White
Write-Host "  7. Démarrez le frontend : cd frontend ; npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "📖 Pour plus d'informations, consultez QUICKSTART.md" -ForegroundColor Yellow
Write-Host ""
