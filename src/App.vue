<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
  <Header></Header>
  <RouterView />
</template>

<style>
  #app, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: white;
    font-family: 'Newsreader', serif;
  }
</style>
