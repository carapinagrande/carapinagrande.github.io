<template>
  <page-layout :title="title">
    <v-row justify="center" align="center">
      <v-col
        sx="12"
        md="8"
        lg="6"
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
            cols="12" :lg="ui.col.lg" :sm="ui.col.sm"
          >
            <chart-stats-widget 
              :title="metric.title"
              :value="metric.value" 
            />
          </v-col> -->
        </v-row>

        <v-row no-gutters>
          <v-col cols="12" :lg="ui.col.lg" :sm="ui.col.sm" xs="12">
            <trip-widget 
              v-for="(trip, index) in trips" :key="index"
              :title="trip.title"
              :subtitle="trip.subtitle"
              :itinerary="trip.itinerary"
            />
          </v-col>
          <v-col cols="12" :lg="ui.col.lg" :sm="ui.col.sm" xs="12">
            <contactpoint-list :itemListElement="contactpoints" />
          </v-col>
          <v-col cols="12" :lg="ui.col.lg" :sm="ui.col.sm" xs="12">
            <EducationalOrganizationList 
              name="Colégios e Escolas"
              :itemListElement="educationalOrganizations" 
              :uxNumberOfItemToDisplay="30"
            />
          </v-col>
          <!-- <v-col cols="12" lg="4" sm="6" xs="12">
            <business-list />
          </v-col> -->
          <v-col cols="12" :lg="ui.col.lg" :sm="ui.col.sm" xs="12">
            <DefinedTermList :itemListElement="definedTerms" />
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </page-layout>
</template>
<script>
export default {
  data: () => ({
    title: 'Carapina Grande',
    description: 'Página do bairro, acesso rápido e utilidades',
    ui: {
      col: {
        sm: '12',
        lg: '12',
      }
    },
    ctas: [
      {item: {name: "Agendamento Vacina COVID-19"}, url:"http://gti.serra.es.gov.br/saude/", position: 1},
      {item: {name: "Demandas do Bairro"}, url:"/demandas", position: 1, _ui: {target: "_self"}},
      {item: {name: "Google Maps"}, url:"https://goo.gl/maps/HWt8aLNWoGu8gmjm6", position: 3},
      {item: {name: "Wikipédia"}, url:"https://pt.wikipedia.org/wiki/Carapina", position: 3},
      {item: {name: "Chamado de Iluminação Pública"}, url:"http://salvadoreng.com.br/chamado-serra/", position: 2},
      {item: {name: "Lei 13465/17", description: "Dispõe sobre a regularização fundiária rural e urbana"}, url:"https://presrepublica.jusbrasil.com.br/legislacao/477399971/lei-13465-17#art-28", position: 2},
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
      {item:{name: "Diário Oficial - Serra - SEAHB: Mais de 1 mil famílias têm direito à escritura de graça", keywords: ["Habitação"], url: "https://ioes.dio.es.gov.br/diariodaserra/portal/edicoes/download/5806/2"}},
    ],
    contactpoints: [
      {item:{name: "ESF/UAPS Carapina Grande", telephone: "+552733183772"}}, //, _ui:{show:["whatsapp"]}
      {item:{name: "Iluminação Pública", telephone: "+552733289119"}},
      {item:{name: "Defensoria Pública", telephone: "+552732981300"}},
      
    ],
    educationalOrganizations: [
      {
        item:{name: "CMEI JOAO CARVALHO DE SOUZA", telephone: "+552732915955", address: "CENTRAL CARAPINA"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32082657"],
      },
      {
        item:{name: "CEEFMTI DR GETUNILDO PIMENTEL", telephone: "+552732092210", address: "NOVO HORIZONTE"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32082223"],
      },
      {
        item:{name: "ESCOLA SIENA", telephone: "+552730642717", address: "DE FATIMA"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32081146"],
      },
      {
        item:{name: "EMEF PROFª AUREA MARIA ANDRADE SILVA FELICIO", telephone: "+552733388088", address: "NOVO HORIZONTE"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32075154"],
      },
      {
        item:{name: "EMEF NOVO HORIZONTE", telephone: "+552733187850", address: "NOVO HORIZONTE"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32067836"],
      },
      {
        item:{name: "CMEI RAIO DE SOL", telephone: "+552732412339", address: "ANDRE CARLONI"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32037031"],
      },
      {
        item:{name: "CMEI PROF LEILA THEODORO", telephone: "+552732282543", address: "NOVO HORIZONTE"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32068247"],
      },
      {
        item:{name: "CMEI PROF MARIA HILDA ALEIXO", telephone: "+552732819904", address: "CARAPINA GRANDE"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32037007"],
      },
      {
        item:{name: "CMEI CENTRAL CARAPINA", telephone: "+552732412329", address: "CENTRAL CARAPINA"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32036930"],
      },
      {
        item:{name: "ESCOLA CRESCER E APRENDER", telephone: "+552733281651", address: "ANDRE CARLONI"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32036736"],
      },
      {
        item:{name: "EEEFM CLOTILDE RATO", telephone: "+552730993450", address: "BAIRRO DE FATIMA"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32036566"],
      },
      {
        item:{name: "EMEF LACY ZULEICA NUNES", telephone: "+552732282290", address: "CARAPINA GRANDE"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32036370"],
      },
      {
        item:{name: "EMEF AURENIRIA CORREA PIMENTEL", telephone: "+552731388869", address: "NOVO HORIZONTE"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32036299"],
      },
      {
        item:{name: "EMEF ANTONIO VIEIRA DE REZENDE", telephone: "+552733183050", address: "CENTRAL CARAPINA"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32036264"],
      },
      {
        item:{name: "EEEF JONES JOSE DO NASCIMENTO", telephone: "+552732280490", address: "Central de Carapina"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32036167"],
      },
      {
        item:{name: "EMEF Americo Guimaraes Costa", telephone: "+552733382522", address: "CARAPINA GRANDE"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32036043"],
      },
      {
        item:{name: "EEEFM Dom João Batista da Motta e Albuquerque", telephone: "+552732281588", address: "ANDRE CARLONI"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32036116"],
      },
      {
        item:{name: "EEEFM Romulo Castello", telephone: "+552732281385", address: "CARAPINA GRANDE"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32036523"],
      },
      {
        item:{name: "EEEFM Belmiro Teixeira Pimenta", telephone: "+552732281348", address: "EURICO SALLES"}, 
        _linkedData: ["draft:br:gov:inep:censo-escolar:resultados:CO_ENTIDADE=32036558"],
      },
    ],
    definedTerms: [
      {item:{name: "ESF", description: "Estratégia Saúde da Família (ESF)"}},
      {item:{name: "UAPS", description: "Unidades de Atenção Primária em Saúde"}},
      {item:{name: "SEAHB", description: "Secretaria de Habitação"}},
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
  }
}
</script>
<style>
.v-expansion-panel-title {
  text-align: left;
}
</style>
