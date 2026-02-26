import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // Ecoute sur 0.0.0.0 (requis dans Docker)
    port: 5173,
    strictPort: true,  // Echec si le port est deja utilise (pas de changement silencieux)
  },
})
