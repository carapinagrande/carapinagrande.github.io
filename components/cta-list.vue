<template>
  <v-list>
    <v-list-item 
      v-for="(listItem, i) in _itemListElement" :key="i"
    >
      <v-btn
        :href="listItem.url"
        target="_blank"
        :title="listItem.item.name"
        variant="outlined" 
        block
      >
        {{listItem.item.name}}
      </v-btn>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    itemListElement: Array,
  },
  computed: {
    _itemListElement() {
      return this.itemListElement?.sort((a, b) => a.position - b.position)
    }
  }
}
</script>