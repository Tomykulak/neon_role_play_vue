<template>
    <!-- Navbar -->
    <v-app-bar :elevation="2" app>
      <v-container class="d-flex align-content-center">
        <v-row>
          <v-col cols="5">
            <router-link to="/" class="textLink">
             Home
            </router-link>
          </v-col>
          <v-col cols="5">
            <router-link to="/about-us" class="textLink">
             About-us
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <!-- END navbar -->
</template>


<script setup>

</script>



<style scoped>
.webName {

font-family: 'Pretendard regular';
font-size: 20px;
}
a{
text-decoration:none;
color: black;
}
.textLink{
text-decoration: none;
font-family: Pretendard std;
font-family: 'Pretendard light';
font-size: 16px;
cursor: pointer;
position: relative;
margin: 100% auto;
width: max-content;
}
.textLink::after{
content: "";
position: absolute;
bottom: -5px;
height: 1px;
width: 100%;
left: 0;
background-color: black;
transition: 0.3s;
transition-timing-function: ease-in-out;
transform: scaleX(0);
}
.textLink:hover::after{
transform: scaleX(1);
}

.favorite{
padding-top: 1em;
}
</style>
