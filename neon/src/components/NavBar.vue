<template>
  <!-- Navbar -->
  <v-app-bar
      app
      color="primary"
      density="comfortable"
      height="100"
  >
    <v-row>
      <v-col
          cols="12"
          class="navigation d-flex"
      >
        <v-app-bar-nav-icon
            icon="mdi-checkbox-marked-circle"
        >
          <img
              src="@/assets/logo.png"
              alt="Logo"
              style="height: 44px;"
              class="pa-4"
          >
        </v-app-bar-nav-icon>
        <v-btn>
          <router-link
              to="/"
              class="textLink"
          >Neon Roleplay
          </router-link>
        </v-btn>
        <v-btn>
          <router-link
              to="/about-us"
              class="textLink"
          >About Us
          </router-link>
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts" setup>
import NeonImage from '@/assets/ai_generated/neon_city_generated_ai.webp';
import Logo from '@/assets/logo.png';

let drawer = true;

</script>


<style scoped>
.textLink {
  text-decoration: none;
  color: inherit; /* This ensures the link color matches the button text color */
}

.navigation {

}
</style>
