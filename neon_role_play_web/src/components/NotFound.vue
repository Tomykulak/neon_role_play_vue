<template>
  <NavBar/>
  <v-container class="d-flex align-content-center">
    <v-row>
      <v-col cols="8">
        <v-col cols="4">
          <h1>404 Not Found</h1>
          The page you are looking for does not exist.
        </v-col>
        <v-col cols="4">
          <router-link to="/">
            <v-btn class="bg-black text-amber">
              Neon Roleplay
            </v-btn>
          </router-link>
        </v-col>
      </v-col>

    </v-row>
  </v-container>
</template>

<script lang="ts" setup>

import NavBar from "@/components/NavBar.vue";
</script>
