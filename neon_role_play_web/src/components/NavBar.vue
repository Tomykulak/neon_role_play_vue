<template>
  <!-- Navbar -->
  <v-app-bar
      app
      :elevation="10"
      color="primary"
      density="comfortable"
      scroll-behavior="fade-image"
      scroll-threshold="50"
      :image=NeonImage
      class="d-flex align-center"
      height="100"

  >
    <v-container>
      <v-row no-gutters>
        <v-col>
          <!-- Icon on the left -->
          <v-app-bar-nav-icon
          >Neon
          </v-app-bar-nav-icon>
        <!-- Navigation Links -->
          <v-btn>
            <router-link
                to="/"
                class="textLink"
            >Neon Roleplay
            </router-link>
          </v-btn>
        <!-- Navigation Links -->
          <v-btn>
            <router-link
                to="/about-us"
                class="textLink"
            >About Us
            </router-link>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
  <!-- END navbar -->
</template>

<script lang="ts" setup>
import NeonImage from '@/assets/ai_generated/neon_city_generated_ai.webp';
import Logo from '@/assets/logo.png';
</script>


<style scoped>
.textLink {
  text-decoration: none;
  color: inherit; /* This ensures the link color matches the button text color */
}
</style>
