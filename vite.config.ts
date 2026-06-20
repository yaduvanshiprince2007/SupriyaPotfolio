import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: '/SupriyaPotfolio/',
  plugins: [
    vue(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.svg', 'icons.svg', 'image.webp'],
      manifest: {
        name: 'Supriya Portfolio',
        short_name: 'Supriya',
        description: 'portfolio of Supriya. Modern, elegant and PWA-ready biodata for alliance inquiries.',
        theme_color: '#f9e4f5',
        background_color: '#fff7fb',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/SupriyaPotfolio/',
        start_url: '/SupriyaPotfolio/',
        lang: 'en',
        icons: [
          {
            src: 'favicon.svg',
            type: 'image/svg+xml',
            sizes: 'any',
            purpose: 'any maskable'
          },
          {
            src: 'icons.svg',
            type: 'image/svg+xml',
            sizes: '512x512',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});
