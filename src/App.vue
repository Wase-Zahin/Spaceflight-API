<template>
  <div id="app">
    <Header></Header>
    <!-- <Counter_Component></Counter_Component> -->
    <router-view />
  </div>
</template>

<script>
// import Counter_Component from './components/Counter_Component.vue'
import Home from './components/Home.vue';
import Blogs from './components/Blogs.vue';
import Articles from './components/Articles.vue';
import Info from './components/Info.vue';
import Header from './components/Header.vue';
import Reports from './components/Reports.vue';

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Blogs,
    Articles,
    Info,
    Reports,
    // Counter_Component
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Newsreader', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
