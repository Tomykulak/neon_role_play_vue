<template>
  <v-app>
    <v-main class="neo-background">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

</script>

<style>
.neo-background {
  background-image: linear-gradient(to right, #30073d, #a93cff);
  height: 120dvh;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
