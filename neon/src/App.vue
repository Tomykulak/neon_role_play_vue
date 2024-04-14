<template>
  <v-app>
    <v-main class="neo-background-dark">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

</script>

<style>
.neo-background-dark {
  background-image: linear-gradient(to right, #30073d, #a93cff);

  /*background-image: url("@/assets/ai_generated/neon_city_generated_ai.webp");*/
  width: 100%;
  padding: 0;
  margin: 0;
}

.neo-background {
  background-color: black;
  height: 120dvh;
}
</style>
