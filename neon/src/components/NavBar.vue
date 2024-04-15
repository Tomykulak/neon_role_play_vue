<template>
  <!-- Navbar -->
  <v-app-bar
    :elevation="20"
    app
    @click="onNavBarClickColorChange"
    :color="state.navBarColor
">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class=" ">
        <v-col cols="auto">
          <v-app-bar-nav-icon
            class="pa-2"
            @click="onMenuClick"
          >
            <img
              :src=Logo
              alt="logo is here"
              style="height: 40px;"
              class="brandLogo"
            >
          </v-app-bar-nav-icon>
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
import router from "@/router";
import {reactive} from "vue";

const state = reactive({
  navBarColor: "primary",
  counter: 0
});

const onMenuClick = () => {
      console.log('Menu button clicked');
      router.push("/");
    }
const onNavBarClickColorChange = () => {
  state.counter++;
  if (state.counter % 2 == 0) {
    state.navBarColor = "primary"
  } else {
    state.navBarColor = "darkPurple3"
  }
}
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
