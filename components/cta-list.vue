<template>
  <v-list>
    <v-list-item 
      v-for="(listItem, i) in _itemListElement" :key="i"
    >
      <v-list-item-header>
        <v-list-item-title>
          <v-btn
            :href="listItem.url"
            :target="listItem._ui?.target || '_blank'"
            :title="listItem.item.name"
            variant="outlined" 
            block
          >
            {{listItem.item.name}}
          </v-btn>
        </v-list-item-title>
        <v-list-item-subtitle
          class="text-center p-1"
          v-if="listItem.item.description"
        >
          {{listItem.item.description}}
        </v-list-item-subtitle>
      </v-list-item-header>
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
