import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin(app => {
  const vuetify = createVuetify()

  app.vueApp.use(vuetify)
})