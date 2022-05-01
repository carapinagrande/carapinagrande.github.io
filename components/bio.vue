<template>
  <v-row justify="center" align="center">
    <v-col
      sx="12"
      md="8"
    >
      <cta-list :itemListElement="ctas" />

      <v-row no-gutters>
        <v-col 
          cols="12"
        >
          <news-list :itemListElement="articles" />
        </v-col>
        <!-- <v-col 
          v-for="(metric, i) in metrics" :key="i"
          cols="12" lg="4" sm="6"
        >
          <chart-stats-widget 
            :title="metric.title"
            :value="metric.value" 
          />
        </v-col> -->
      </v-row>

      <v-row no-gutters>
        <v-col cols="12" lg="4" sm="6" xs="12">
          <trip-widget 
            v-for="(trip, index) in trips" :key="index"
            :title="trip.title"
            :subtitle="trip.subtitle"
            :itinerary="trip.itinerary"
          />
        </v-col>
        <v-col cols="12" lg="4" sm="6" xs="12">
          <contactpoint-list :itemListElement="contactpoints" />
        </v-col>
        <!-- <v-col cols="12" lg="4" sm="6" xs="12">
          <business-list />
        </v-col> -->
      </v-row>

    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      ctas: [
        {item: {name: "Agendamento Vacina COVID-19"}, url:"http://gti.serra.es.gov.br/saude/", position: 1},
        {item: {name: "Google Maps"}, url:"https://goo.gl/maps/HWt8aLNWoGu8gmjm6", position: 1},
        {item: {name: "Wikipédia"}, url:"https://pt.wikipedia.org/wiki/Carapina", position: 2},
        {item: {name: "Chamado de Iluminação Pública"}, url:"http://salvadoreng.com.br/chamado-serra/", position: 2},
      ],
      metrics: [
        {title: "Professores Públicos", value: 200},
        {title: "Professores Contratados", value: 100},
        {title: "Alunos da Rede Pública", value: 300},
        {title: "Alunos da Rede Privada", value: 100},
        {title: "Médicos do SUS", value: 100},
        {title: "Enfermeir@s do SUS", value: 200},
        // {title: "", value: },
      ],
      trips: [
        {
          title: "Linhas de Ônibus", subtitle: "Transcol", 
          itinerary: [
            {name: "844A", url: "https://moovitapp.com/index/pt-br/transporte_p%C3%BAblico-line-844_A-Vit%C3%B3ria-4794-1058372-47908838-1"},
            {name: "844B", url: "https://moovitapp.com/index/pt-br/transporte_p%C3%BAblico-line-844_B-Vit%C3%B3ria-4794-1058372-47908839-1"},
            {name: "597", url: "https://moovitapp.com/index/pt-br/transporte_p%C3%BAblico-line-597-Vit%C3%B3ria-4794-1058372-1776532-0"},
          ]
        }
      ],
      articles: [
        {item:{name: "Serra Realiza Cadastro para Regularização Fundiária em Carapina Grande", keywords: ["Habitação"], url: "http://serra.es.gov.br/noticias/serra-realiza-cadastro-para-regularizacao-fundiaria-em-carapina-grande"}},
        {item:{name: "Pedidos de Iluminação Pública pela Internet e Telefone na Serra", keywords: ["Urbanismo"], url: "http://www.serra.es.gov.br/noticias/pedidos-de-iluminacao-publica-pela-internet-e-telefone-na-serra"}},
      ],
      contactpoints: [
        {item:{name: "UAPS Carapina Grande", telephone: "+552733183772"}},
        {item:{name: "Iluminação Pública", telephone: "+552733289119"}},
      ]
    }
  }
}
</script>