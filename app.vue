<template>
  <div>
    
  </div>
<v-app>
  <v-app-bar app>
    <h1>Carapina Grande</h1>
  </v-app-bar>

  <v-main>
    <Head>
      <Title>Carapina Grande</Title>
      <meta name="description" content="Página do bairro, acesso rápido e utilidades" />
      <meta name="og:description" content="Página do bairro, acesso rápido e utilidades" />
      <meta property="og:image:secure_url" itemprop="image" content="https://carapinagrande.bairro.app.br/carapina-grande-osm.jpg">
      <meta property="og:type" content="website" />
    </Head>

    <v-container fluid>
      <!-- If using vue-router -->
      <!-- <router-view></router-view> -->
      <v-row justify="center" align="center">
        <v-col>
          <bio/>
        </v-col>
      </v-row>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>
<script>
export default {
  props: {
    name: String,
    description: String,
    image: Object,
  }
}
</script>