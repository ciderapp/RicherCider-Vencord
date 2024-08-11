# ⚠️ NO LONGER MAINTAINED, THIS FEATURE IS NOW AVAILABLE BY DEFAULT IN DISCORD AND UTILIZED IN CIDER 2.5+ ⚠️
---
# richerCider Plugin for Vencord
A plugin that provides a simple header rewrite to allow Cider to show as the listening activity type.

Created by cryptofyre

## Installation Guide (Automated, Windows Only)
### Run in Powershell (Non Admin)
`Invoke-Expression (Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/ciderapp/RicherCider-Vencord/main/Install-RicherCider.ps1' -UseBasicParsing).Content`

## Installation Guide (Manual)

#### You'll need the following dependencies
- Git ([https://git-scm.com](https://git-scm.com/download))
- Node.JS (https://nodejs.org/dist/v18.16.0/node-v18.16.0-x64.msi)
- pnpm (Install with `npm install -g pnpm`)

#### Clone the Vencord repository
```
git clone https://github.com/Vendicated/Vencord
```

#### Download latest RicherCider plugin into directory. (Requires cURL)
```
curl https://raw.githubusercontent.com/ciderapp/RicherCider-Vencord/main/richerCider.desktop.tsx -o Vencord/src/plugins/richerCider.desktop.tsx
```

#### Navigate to directory
```
cd Vencord/
```

#### Build & Inject
```
pnpm install; pnpm build; pnpm inject;
```

#### Do not use public forks including this file as we cannot assure the legitmacy of the repo and its contents.
