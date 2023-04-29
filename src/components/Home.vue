<template>
    <div class="articlesNblogs">
        <div class="articlesWrapper">
            <div class="image" v-for="article in articles" :key="article.id">
                <router-link :to="{ name: 'articleItem', params: { id: article.id } }">
                    <img :src="article.image_url">
                </router-link>
            </div>
        </div>

        <div class="blogs">
            <div class="blog" v-for="blog in blogs" :key="blog.id">
                <router-link :to="{ name: 'blogsItem', params: { id: blog.id } }">
                    <h2>{{ blog.title }}</h2>
                </router-link>
                <p>{{ blog.published_at }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { ArticlesState } from '../vuex/articles';
import type { BlogsState } from '../vuex/blogs'
import { store } from '../vuex/index';
import { RouterLink } from "vue-router";

const articles = ref<ArticlesState[]>();
const blogs = ref<BlogsState[]>();

onMounted(async () => {
    await store.dispatch('articles/fetchData');
    // console.log(store.state.articles.data)
    articles.value = store.state.articles.data
    console.log(articles.value)

    await store.dispatch('blogs/fetchData');
    blogs.value = store.state.blogs.data;
    console.log(blogs.value);

})

</script>

<style lang="scss" scoped>
.articlesNblogs {
    display: inline-flex;

    .articlesWrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

        .image {
            margin: 0;

            img {
                height: 250px;
                width: 250px;

                @media (max-width: 486px) {
                    height: 100%;
                    width: 100%;
                }
            }

        }
    }

    .blogs {
        .blog {
            padding: 1rem 2rem;
            border: 1px solid rgb(46, 46, 46);

            a {
                color: black;
                text-decoration: none;
            }

            p {
                text-align: end;
                color: rgb(181, 181, 181);
            }
        }
    }

    @media (max-width: 486px) {
        flex-direction: column;
    }
}
</style>