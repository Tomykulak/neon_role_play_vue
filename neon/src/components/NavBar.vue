<template>
  <!-- Navbar -->
  <v-app-bar app color="primary">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class=" ">
        <v-col cols="auto">
          <router-link
            to="/"
            class="textLink"
          >
            <v-app-bar-nav-icon
              class="pa-2"
            >
              <img
                :src=Logo
                alt="Logo"
                style="height: 40px;"
                class="brandLogo"
              >
            </v-app-bar-nav-icon>
          </router-link>

          <router-link
            to="/"
            class="textLink"
          >
            <v-btn>Neon Roleplay</v-btn>
          </router-link>


          <router-link
            to="/about-us"
            class="textLink"
          >
            <v-btn>About Us</v-btn>
          </router-link>

        </v-col>
      </v-row>
    </v-responsive>
  </v-app-bar>
</template>

<script lang="ts" setup>
import Logo from '@/assets/logo.png';

let drawer = true;

</script>


<style scoped>
.textLink {
  text-decoration: none;
  color: inherit; /* This ensures the link color matches the button text color */
}

.brandLogo {
  margin-bottom: 30px;
}
</style>
