<template>
  <v-card class="mx-auto my-auto pa-5 pa-md-10" max-width="800px" style="min-height: 100vh; overflow: auto; overflow-y: hidden;">
    <Header/>
    <CovidDataTracker />
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        attrs: {
          class: "mb-6",
          boilerplate: true,
          elevation: 2,
        },
        loading: true,
      };
    },
  };
</script>
