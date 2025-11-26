# Script de démarrage pour Windows PowerShell

Write-Host "🚀 Démarrage de Kushtati E-Commerce..." -ForegroundColor Cyan
Write-Host ""

# Fonction pour démarrer un processus en arrière-plan
function Start-DevServer {
    param (
        [string]$Path,
        [string]$Name,
        [string]$Command
    )
    
    Write-Host "▶️  Démarrage de $Name..." -ForegroundColor Yellow
    $job = Start-Job -ScriptBlock {
        param($p, $c)
        Set-Location $p
        Invoke-Expression $c
    } -ArgumentList $Path, $Command
    
    return $job
}

# Démarrer le backend
$backendPath = Join-Path $PSScriptRoot "backend"
$backendJob = Start-DevServer -Path $backendPath -Name "Backend API" -Command "npm run dev"

Start-Sleep -Seconds 3

# Démarrer le frontend
$frontendPath = Join-Path $PSScriptRoot "frontend"
$frontendJob = Start-DevServer -Path $frontendPath -Name "Frontend Next.js" -Command "npm run dev"

Write-Host ""
Write-Host "✅ Les serveurs sont en cours de démarrage..." -ForegroundColor Green
Write-Host ""
Write-Host "🌐 URLs disponibles :" -ForegroundColor Cyan
Write-Host "  Frontend : http://localhost:3000" -ForegroundColor White
Write-Host "  Backend  : http://localhost:5000" -ForegroundColor White
Write-Host ""
Write-Host "⌨️  Appuyez sur Ctrl+C pour arrêter tous les serveurs" -ForegroundColor Yellow
Write-Host ""

# Attendre que l'utilisateur arrête les serveurs
try {
    Wait-Job $backendJob, $frontendJob
} catch {
    Write-Host ""
    Write-Host "🛑 Arrêt des serveurs..." -ForegroundColor Yellow
    Stop-Job $backendJob, $frontendJob
    Remove-Job $backendJob, $frontendJob
    Write-Host "✅ Serveurs arrêtés" -ForegroundColor Green
}
