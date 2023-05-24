// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    [
      '@pinia/nuxt',
      [
        {
          autoImports: [
            'storeToRefs',
            'defineStore',
          ]
        }
      ]
    ]
  ],
  imports: {
    dirs: [
      'stores',
      'types',
    ]
  },
})
