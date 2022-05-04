<template>
  <p class="text-h6">{{name}}</p>
  <v-row dense>
    <v-col 
      cols="12"
        v-for="(element, i) in itemListElement" :key="i"
      :href="element.item.seeks.url"
      target="blank"
    >
      <v-card elevation="1">
        <v-card-title>
          {{element.item.seeks.name}}
        </v-card-title>
        <v-card-subtitle>
          <strong 
            v-for="keyword, i in element.item.seeks.keywords" :key="i"
          >
            {{keyword}}
          </strong>
          <span>{{parseDate(element.item.seeks.availabilityStarts).toLocaleDateString('pt-BR')}}</span>
          <span>, expira em {{paseDateDiff(element.item.seeks.availabilityStarts).days}} dias e {{paseDateDiff(element.item.seeks.availabilityStarts).hours}} horas</span>
        </v-card-subtitle>
        <v-progress-linear
          class="mt-3"
          :value="parseDateDiffPorcent(element.item.seeks.availabilityStarts)"
        ></v-progress-linear>
        <v-card-content>
          <v-expansion-panels
            v-if="element.item.telephone"
          >
            <v-expansion-panel>
              <v-expansion-panel-title>
                Entrar em Contato
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <contactpoint-telephone 
                  v-if="element.item.telephone"
                  :telephone="element.item.telephone" 
                />
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-content>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-btn 
        v-if="displayMore"
        variant="outlined" block
      >
        Ver Lista Completa
      </v-btn>
    </v-col>
  </v-row>
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
    uxAvailabilityEnds: {
      type: Number,
      default: 14
    },
    itemListElement: Array,
  },
  computed: {
    displayMore() {
      return this.itemListElement.length > this.uxNumberOfItemToDisplay
    },
    _itemListElement() {
      return this.itemListElement.sort((a, b) => a.item.seeks.name.localeCompare(b.item.seeks.name))
    }
  },
  methods: {
    parseDate(value) {
      return new Date(value)
    },
    parseDateDiffPorcent(value) {
      const today = new Date()
      const start = new Date(value)
      const end = new Date(value)
      end.setDate(start.getDate() + this.uxAvailabilityEnds)
      const q = Math.abs(today-start)
      const d = Math.abs(end-start)
      return Math.round((q/d)*100)
    },
    paseDateDiff(value) {
      const today = new Date()
      const start = new Date(value)
      const end = new Date(value)
      end.setDate(start.getDate() + this.uxAvailabilityEnds)
      var delta = Math.abs(end - today) / 1000;

      // calculate (and subtract) whole days
      var days = Math.floor(delta / 86400);
      delta -= days * 86400;

      // calculate (and subtract) whole hours
      var hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;

      // calculate (and subtract) whole minutes
      var minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;
      return {days, hours, minutes}
    }
  }
}
</script>
