<template>
  <v-card plain>
    <v-card-header>
      <v-card-header-text>
        <v-card-title>{{name}}</v-card-title>
      </v-card-header-text>
    </v-card-header>

    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel v-for="(element, i) in itemListElement.slice(0, uxNumberOfItemToDisplay)" :key="i">
          <v-expansion-panel-title>
            {{element.item.name}}
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <contactpoint-telephone :telephone="element.item.telephone" />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
    <v-card-actions v-if="displayMore">
      <v-btn variant="outlined" block>
        Ver Lista Completa
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Organizações Educacionais',
    },
    uxNumberOfItemToDisplay: {
      type: Number,
      default: 10
    },
    itemListElement: Array,
  },
  computed: {
    displayMore() {
      return this.itemListElement.length > this.uxNumberOfItemToDisplay
    }
  }
}
</script>
