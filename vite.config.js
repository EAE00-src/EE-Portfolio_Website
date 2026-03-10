import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemapPlugin from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
 base: '/EE-Portfolio_Website/', plugins: [
    react(),
    sitemapPlugin({
      hostname: 'https://EAE00-src.github.io/EE-Portfolio_Website/',
      dynamicRoutes: ['/', '/about', '/portfolio', '/contact']
    })
  ],
})
