// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    define: {
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  supabase: {
    redirect : false,
    types: './types/database.type.ts'
  }
})