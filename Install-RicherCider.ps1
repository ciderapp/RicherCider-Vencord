# Make sure the user is in their own home directory and **NOT** System32.
$homeDirectory = [Environment]::GetFolderPath("UserProfile")
Set-Location -Path $homeDirectory

# Install Node.js v20 and Git using Winget
winget install -e --id OpenJS.NodeJS
winget install -e --id Git.Git

# Install pnpm using npm
npm install -g pnpm@9.1.0

# Clone the Vencord repository
git clone https://github.com/Vendicated/Vencord.git

# Download a file into the cloned repository directory
$downloadUrl = "https://raw.githubusercontent.com/ciderapp/RicherCider-Vencord/main/richerCider.desktop.tsx"
$downloadPath = "Vencord/src/plugins/richerCider.desktop.tsx"
Invoke-WebRequest -Uri $downloadUrl -OutFile $downloadPath

# Kill all Discord clients including Canary and PTB versions. This is necessary to prevent the installer from failing.
Stop-Process -Name Discord -Force -ErrorAction SilentlyContinue
Stop-Process -Name DiscordCanary -Force -ErrorAction SilentlyContinue
Stop-Process -Name DiscordPTB -Force -ErrorAction SilentlyContinue

# Run the installer for Vencord
Set-Location Vencord\
pnpm install
pnpm run build

# Prompt user to select "Install Vencord" option
Write-Output "Please select the 'Install Vencord' option in the installer."
pnpm run inject

# Prompt installer should have completed successfully assuming you followed the instructions.
Write-Output "If you followed the instructions correctly, the installer should have completed successfully."
Write-Output "You'll need to make sure to enable the plugin (richerCider) in the Vencord settings inside of Discord > Settings > Plugins > richerCider and turn the switch on and click restart."
