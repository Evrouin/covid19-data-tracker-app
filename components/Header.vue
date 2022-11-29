<template>
  <div>
    <v-btn icon depressed @click="toggleTheme">
      <v-icon>
        {{ isDark ? ' mdi-moon-waning-crescent' : 'mdi-white-balance-sunny' }}
      </v-icon>
    </v-btn>
    <a href="https://covid19api.com/" target="_blank">
      <v-img v-if="isDark" class="mx-auto my-5" contain max-width="200" :src="require('../assets/images/covid19api-light.png')" :lazy-src="require('../assets/images/covid19api-light.png')">
        <h5 class="text-uppercase">Powered by:</h5>
      </v-img>
      <v-img v-else class="mx-auto my-5" contain max-width="200" :src="require('../assets/images/covid19api.png')" :lazy-src="require('../assets/images/covid19api.png')"><h5 class="text-uppercase">Powered by:</h5> </v-img>
    </a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isDark: true,
      };
    },
    methods: {
      toggleTheme() {
        this.isDark = !this.isDark;
        this.$vuetify.theme.dark = this.isDark;
      },
    },
  };
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
