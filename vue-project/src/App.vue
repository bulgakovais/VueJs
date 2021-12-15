<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn :ripple="false" plain class="theme--dark" to="/home">Home</v-btn>
      <v-btn :ripple="false" plain class="theme--dark" to="/about">About</v-btn>
      <v-btn :ripple="false" plain class="theme--dark" to="/dashboard"
        >Dashboard</v-btn
      >
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
a {
  color: black;
  margin: 0 20px 0 0;
}
.theme--dark {
  color: white;
}
</style>
