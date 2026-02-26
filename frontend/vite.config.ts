import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,        // Ecoute sur 0.0.0.0 (requis dans Docker)
    port: 5173,
    strictPort: true,  // Echec si le port est deja utilise (pas de changement silencieux)
  },
  test: {
    environment: 'jsdom',           // Simule le navigateur (DOM, window, document)
    globals: true,                  // describe/it/expect disponibles sans import
    setupFiles: ['./tests/setup/setupTests.ts'],  // Fichier chargé avant chaque test
    coverage: {
      provider: 'v8',               // Moteur de mesure de couverture
      reporter: ['text', 'html'],   // text = terminal, html = rapport visuel
      exclude: [
        '**/*.css',                 // CSS n'est pas du code testable
        '**/*.svg',                 // Images SVG ne sont pas du code testable
        '**/assets/**',             // Dossier assets (images, fonts...)
        '**/node_modules/**',
        '**/tests/**',              // Les fichiers de test eux-memes
        'vite.config.ts',
      ],
      thresholds: {
        lines: 80,                  // Minimum 80% de lignes couvertes
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
})
