<template>
  <v-card plain>
    <v-card-header>
      <v-card-header-text>
        <v-card-title>{{name}}</v-card-title>
      </v-card-header-text>
    </v-card-header>

    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel v-for="(element, i) in itemListElement" :key="i">
          <v-expansion-panel-title>
            {{element.item.name}}
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            {{element.item.description}}
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Siglas, Acronimos e Glossário',
    },
    itemListElement: Array,
  }
}
</script>
