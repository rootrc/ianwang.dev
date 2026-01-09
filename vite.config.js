import { defineConfig } from 'vite'
import { execSync } from "child_process";
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const lastUpdated = execSync(
  "git log -1 --format=%cd --date=iso"
).toString();

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  define: {
    __LAST_UPDATED__: JSON.stringify(lastUpdated),
  },
})