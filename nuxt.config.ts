// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  //global styles
  css:[
    '~/assets/index.css'
  ],
  app:{
    head:{
      charset: 'UTF-8', 
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no', 
      title: 'Coca', 
      meta: [
        { name: 'description', content: 'Проверка возможностей Nuxt' },
        { name: 'robots', content: 'index, follow' },
      ],
      // link: [
      //   // Пример добавления фавиконки
      //   { rel: 'icon', href: '/favicon.ico' }
      // ],
    }
  }
})
