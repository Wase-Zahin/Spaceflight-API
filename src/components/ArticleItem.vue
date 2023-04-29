<template>
  <div>ID Is: {{ $route.params.id }}</div>
  <div v-for="item in articleItem" :key="item.id">
    <h1>{{ item.title }}</h1>
    <img :src="item.image_url">
    <p>{{ item.summary }}</p>
  </div>
</template>

<script setup lang="ts">
import { store } from "@/vuex";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import type { ArticleItemState } from '../vuex/articleItem'

    const route = useRoute();
    const articleItem = ref<ArticleItemState[]>();

    onMounted(async () => {
        await store.dispatch('ArticleItem/fetchData', route.params.id);
        articleItem.value = [store.state.ArticleItem]
        console.log(articleItem);
    })

</script>

<style lang="scss" scoped>

</style>
