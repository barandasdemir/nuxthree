import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@pinia/nuxt'],

  typescript: {
    strict: true,
    shim: false,
    typeCheck: 'build'
  }
})
