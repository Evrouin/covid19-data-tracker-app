<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer padless>
      <v-row no-gutters>
        <v-col class="text-center">
          <h6>2021 — <strong>COVID-19 Tracker</strong></h6>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>
