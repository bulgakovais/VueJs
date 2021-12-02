<template>
  <div id="app">
    <header>
      <div>My personal costs</div>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
 
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      page: "dashboard",
    };
  },

  methods: {},
};
</script>
 
<style lang="scss" scoped>
#app {
  width: 550px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  margin: 0 20px 0 0;
}
</style>
