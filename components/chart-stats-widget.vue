<template>
  <v-card contained-text v-bind="props">
    <v-card-header>
      <v-card-header-text>
        <v-card-title>
            {{title}}
        </v-card-title>
      </v-card-header-text>
    </v-card-header>

    <v-card-text>
        <span>
            <span>{{prefix}}</span>
            <span class="text-h4">{{value}}</span>
            <span>{{postfix}}</span>
        </span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    value: Number,
    prefix: String,
    postfix: String,
  }
}
</script>