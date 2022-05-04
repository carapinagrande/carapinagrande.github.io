<template>
  <page-layout :title="title">
    <v-row justify="center">
      <v-col
        sx="12"
        md="8"
        lg="6"
      >
        <p class="my-5">Demandas cadastradas pelo moradores.</p>
        <demand-list 
          v-if="serviceDemands.length"
          name="Serviços" 
          :itemListElement="serviceDemands" 
        />
        <demand-list 
          v-if="productDemands.length"
          name="Produtos" 
          :itemListElement="productDemands" 
        />
      </v-col>
    </v-row>
  </page-layout>
</template>

<script>
export default {
  data: () => ({
    title: 'Carapina Grande > Demandas',
    description: 'Demandas no bairro de Carapina Grandes',
    serviceDemands: [],
    productDemands: [
      {
        item: {
          seeks:{
            name: "Portão para garagem, basculante, instalado", 
            availabilityStarts:"2022-05-04", 
            address: "Carapina Grande",
          },
          telephone: '+5527998761122',
        },
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32082657"],
      },
    ]
  }),
  head() {
    return {
      title: this.title,
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
