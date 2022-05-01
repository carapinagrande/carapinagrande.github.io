<template>
  <v-card contained-text v-bind="props">
    <v-card-header>
      <v-card-header-text>
        <v-card-title>
            {{title}}
        </v-card-title>
        <v-card-subtitle>
          {{subtitle}}
        </v-card-subtitle>
      </v-card-header-text>
    </v-card-header>

    <v-card-text>
      <v-btn
        v-for="(_itinerary, i) in itinerary" :key="i"
        :href="_itinerary.url"
        target="blank"
      >
        {{_itinerary.name}}
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {type: String, default: 'Viajens'},
    subtitle: String,
    itinerary: Array,
  }
}
</script>