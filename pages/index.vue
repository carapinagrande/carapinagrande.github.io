<template>
  <bio/>
</template>
<script>
export default {
  data: () => ({
    description: 'Página do bairro, acesso rápido e utilidades',
  }),
  head() {
    return {
      title: 'Carapina Grande',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image:secure_url',
          name: 'og:image:secure_url',
          content: 'https://carapinagrande.bairro.app.br/images/carapina-grande-osm.jpg'
        },
        {
          hid: 'og:type',
          name: 'og:image:secure_url',
          content: 'website'
        },
      ]
    }
  },
  props: {
    name: String,
    description: String,
    image: Object,
  }
}
</script>