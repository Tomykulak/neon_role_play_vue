<template>
  <v-container class="fill-height bg-yellow">
    <v-responsive class="d-flex justify-center align-center text-center fill-height ga-1">
      <v-row class="bg-black ma-2 ">
        <!-- CARD 1-->
        <v-col cols="auto" class="bg-red">
          <div class="text-h1">Ahoj 1</div>
          <v-card class="pepe_card mx-auto my-3">
            <v-img class="pepe" src="@/assets/pepeDance.gif"></v-img>
          </v-card>
          <!-- END CARD 1-->
        </v-col>
        <v-col cols="auto" class="bg-amber">
          <!-- CARD 2-->
          <div class="text-h1">Ahoj 2</div>
          <v-card class="pepe_card mx-auto my-3">
            <v-img class="pepe" src="@/assets/pepeDance.gif"></v-img>
          </v-card>
          <!-- END CARD 2-->
        </v-col>
        <v-col cols="auto" class="bg-blue">
          <div class="text-h1">Ahoj 3</div>
          <v-card class="pepe_card mx-auto my-3">
            <v-img class="pepe" src="@/assets/pepeDance.gif"></v-img>
          </v-card>
        </v-col>
        <v-col cols="auto" class="bg-green">
          <div class="text-h1">Ahoj 4</div>
          <v-card class="pepe_card mx-auto my-3">
            <v-img class="pepe" src="@/assets/pepeDance.gif"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
<script>

</script>
<style>
.pepe_card {
  max-width: 200px;
}

.pepe {
  max-height: 60dvh;
}
</style>
