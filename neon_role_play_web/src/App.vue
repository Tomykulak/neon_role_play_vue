<template>
  <v-app>
    <v-main class="px-16">
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

</script>

<style>
.neo {
  background-image: url("@/assets/neon_background_upscaled.webp");
  min-height: 1200px;
  height: auto;
  width: 100%;
  background-size: cover;
  background-position: 50% 50%;
}
</style>