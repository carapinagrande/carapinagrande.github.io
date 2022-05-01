<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <pre>{{telephone}}</pre>
      </v-col>
      <v-col cols="6">
        <v-btn prepend-icon="mdi-phone" :href="`tel:${telephone}`" title="Ligar para Telefone" block>
          Ligar
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn prepend-icon="mdi-copy" title="Copiar Telefone" block>
          Copiar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    telephone: String
  }
}
</script>