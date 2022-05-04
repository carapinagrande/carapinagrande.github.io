<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app>
      {{title}}
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <slot></slot>
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
    title: String,
    headerTitle: String,
    headerMeta: Array, 
  }
}
</script>
