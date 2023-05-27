<template>
  <div>ID is {{ $route.params.id }}</div>
  <div v-for="item in blogsItem" :key="item.id">
    <h1>{{ item.title }}</h1>
    <img :src="item.image_url">
    <p>{{ item.summary }}</p>
  </div>
</template>

<script setup lang="ts">
import { store } from "@/vuex";
import type { BlogsItemState } from "@/vuex/blogItem";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

    const route = useRoute();
    const blogsItem = ref<BlogsItemState[]>([]);

    onMounted(async () => {
        await store.dispatch('BlogsItem/fetchData', route.params.id);
        blogsItem.value = [store.state.BlogsItem]
        console.log(store.state.BlogsItem)
    })
</script>

<style lang="scss" scoped>

</style>