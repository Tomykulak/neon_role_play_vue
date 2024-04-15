<template>
  <v-container class="fill-height">
    <v-responsive class="main_thumbnail d-flex align-center justify-center mx-auto my-auto pa-2">
      <v-row class="mx-auto my-auto">
        <v-col cols="auto" class="">
          <div class="text-h1 honk-home_header">
            Neon Roleplay
          </div>
          <v-spacer class="my-5"/>
          <div class="text-h3 text-deep-purple-lighten-1">
            We are GTA 5 private server
          </div>
        </v-col>
      </v-row>
      <v-spacer class="my-5"/>
      <v-row class="mx-auto my-auto text-white">
        <v-col cols="sm-5" class="">
          <div class="text-caption">
            Dive into a world where neon lights
            are not just part of the scenery,
            but a beacon calling to those brave
            enough to live out their fantasies in a vast,
            vibrant metropolis. Whether you're a seasoned
            roleplayer or just starting out, Neon City
            is your gateway to an immersive experience
            like no other.
          </div>
        </v-col>
      </v-row>
      <v-spacer class="my-5"/>
      <v-row class="mx-auto my-auto text-white">
        <v-col cols="sm-4" class="">
          <div class="text-caption">
            Signing up is easy!
            Click [Join Now] to start your adventure.
            Connect, collaborate, and create lasting friendships.
            Neon City is not just a place to play;
            it's a place to belong.
          </div>
          <v-btn class="my-3" color="black">
            <div class="">
              Join us!
            </div>
          </v-btn>
          <v-btn class="my-3" color="black">
            <div class="">
              GET V.I.P
            </div>
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>


<script setup lang="ts">

</script>

<style>
.honk-home_header {
  font-family: "Honk", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "MORF" 15,
  "SHLN" 50;
}

.main_thumbnail {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

@media (min-width: 1024px) {
  .text-h1.honk-home_header {
    font-size: 12rem !important;
    line-height: 12rem;
    letter-spacing: 0.03em !important;
  }
}

.loading-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
