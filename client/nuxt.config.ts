// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css','~/assets/css/normalize.css'],
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: "ПостЛит – Портал постапокалиптических электронных и аудиокниг, читать и слушать онлайн на Postlit",
      meta: [
        {name: "keywords", content: "СТАЛКЕР, S.T.A.L.K.E.R, МЕТРО 2033, S.W.A.L.K.E.R, Э.К.С.П.А.Н.С.И.Я, Кремль 2222, SURVARIUM, Чистилище, Роза Миров, S-T-I-K-S, Зона Смерти, Пикник на обочине, Ареал"},
        {name: "description", content: "Аудиокниги и книги серии S.T.A.L.K.E.R. Слушай или читай у нас бесплатно, без подписки и регистрации"}
      ]
    }
  }
})
