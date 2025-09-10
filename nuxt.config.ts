import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  ssr: true,
  css: ['~/assets/css/main.css', '~/assets/css/style.sass'],
  nitro: {
    compatibilityDate: '2025-09-08'
  },
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      web3AccessKey: ''
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.svg' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  }
})
