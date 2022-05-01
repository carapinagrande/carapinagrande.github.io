<template>

  <v-card-header>
    <v-card-header-text>
      <v-card-title>
          Notícias em Destaque
      </v-card-title>
    </v-card-header-text>
  </v-card-header>
  <v-card-text>
    <v-list>
      <!-- <v-list-subheader>Habitação</v-list-subheader> -->

      <v-list-item
        v-for="(element, i) in itemListElement" :key="i"
        :href="element.item.url"
        target="blank"
      >
        <v-list-item-header>
          <v-list-item-title v-if="element.item.keywords">
            <strong v-for="keyword, i in element.item.keywords" :key="i">{{keyword}}</strong>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{element.item.name}}
          </v-list-item-subtitle>
        </v-list-item-header>
      </v-list-item>
    </v-list>
  </v-card-text>
</template>

<script>
export default {
  props: {
    itemListElement: Array,
  }
}
</script>