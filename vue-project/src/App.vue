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
    <!-- <transition name="fade"><context-menu /> </transition> -->
  </div>
</template>
 
<script>
// import ContextMenu from "./components/ContextMenu.vue";
export default {
  name: "App",
  // components: { ContextMenu },
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

