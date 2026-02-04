@echo off
echo 🚀 Starting Deployment to GitHub Pages...

:: 1. Build the project
echo 📦 Building Angular application...
call npx ng build --configuration production --base-href "/"

:: Check if build was successful
if %errorlevel% neq 0 (
    echo ❌ Build failed. Deployment aborted.
    pause
    exit /b %errorlevel%
)

:: 2. Deploy to GitHub Pages
echo 📤 Uploading to GitHub...
call npx angular-cli-ghpages --dir=dist/miketam76.github.io/browser

:: Check if deploy was successful
if %errorlevel% neq 0 (
    echo ❌ Deployment failed. Check your Git credentials/Token.
    pause
    exit /b %errorlevel%
)

echo ✅ Success! Your site should be live in a few minutes.
pause