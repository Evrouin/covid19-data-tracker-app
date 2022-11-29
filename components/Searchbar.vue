<template>
  <v-col cols="12">
    <v-autocomplete dense outlined clearable label="Select Country" :items="countries" item-text="Country" item-value="ID" @change="setCountry($event)"></v-autocomplete>
  </v-col>
</template>

<script>
  export default {
    computed: {
      countries() {
        return this.$store.getters.countries;
      },
    },
    methods: {
      setCountry(e) {
        if (!e) {
          this.$store.dispatch("FETCH_SUMARRRY");
        } else {
          this.$store.dispatch("FETCH_COUNTRY", e);
        }
      },
    },
  };
</script>

<style></style>
