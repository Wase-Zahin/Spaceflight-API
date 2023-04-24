<template>
    <div class="blogsNarticles">
        <el-carousel class="article_images" :interval="5000">
            <el-carousel-item v-for="item in articles" :key="item.id">
                <img class="article_image" :src="item.image_url">
            </el-carousel-item>
        </el-carousel>
        <div class="blog_items">
            <h2>Recent Blogs</h2>
            <div class="blog_item">
                <div v-for="item in blogs" :key="item.id">
                    <h3 class="blog_titles"> {{ item.title }}<span>{{ formatDate(item.published_at) }}</span></h3>
                    <!-- <hr /> -->
                </div>
            </div>
        </div>
    </div>
    <div class="featured_contents_wrapper">
        <h2>Featured Contents</h2>
        <div class="featured_contents">
            <div class="featured_content" v-for="item in featuredContents" :key="item.id">
                <img class="feature_content_img" :src="item.image_url">
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const articles = ref([]);
        const blogs = ref([]);
        const reports = ref([]);
        const featuredContents = ref([]);

        const formatDate = (dateStr) => {
            const date = new Date(dateStr);
            return new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }).format(date);
        };

        const getRandomFeaturedContents = () => {
            const combinedResults = [...articles.value, ...blogs.value, ...reports.value];
            const uniqueImageUrls = new Set();
            const selectedResults = [];

            while (uniqueImageUrls.size < 6) {
                const randomIndex = Math.floor(Math.random() * combinedResults.length);
                const imageUrl = combinedResults[randomIndex].image_url;

                if (!uniqueImageUrls.has(imageUrl)) {
                    uniqueImageUrls.add(imageUrl);
                    selectedResults.push(combinedResults[randomIndex]);
                }
            }

            featuredContents.value = selectedResults;
        };

        onMounted(async () => {
            await store.dispatch('articles/fetchArticles');
            articles.value = store.state.articles.articles.results;

            await store.dispatch('blogs/fetchBlogs');
            blogs.value = store.state.blogs.blogs.results;
            blogs.value.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

            await store.dispatch('reports/fetchReports');
            reports.value = store.state.reports.reports.results;

            getRandomFeaturedContents();
        });

        return {
            articles,
            blogs,
            reports,
            featuredContents,
            formatDate,
        };
    }
};
</script>

<style scoped>
.blogsNarticles {
    display: flex;
    justify-content: center;
    gap: 20px;
    max-width: 1100px;
    margin: auto;
    margin-top: 2.5rem;
    padding: 1rem;
}

.article_images {
    height: 300px;
    width: 350px;
    cursor: pointer;
}

.article_image {
    background-size: cover;
    height: 300px;
    width: 350px;
}

.blog_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    margin: auto;
}

.blog_item span {
    display: block;
    color: gray;
    text-align: end;
    font-size: 16px;
    font-weight: 200;
    padding: 10px 6px;
}

.blog_titles {
    border: 1px solid lightgray;
    padding: 10px 32px;
    cursor: pointer;
}

.blog_items h2,
.featured_contents_wrapper h2 {
    text-align: start;
    color: crimson;
    padding-bottom: 1rem;
    padding-left: 32px;
    text-align: center;
    font-weight: 600;
}

.feature_content_img {
    height: 300px;
    width: 300px;
}

.featured_contents {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

@media screen and (max-width: 768px) {
    .blogsNarticles {
        flex-wrap: wrap;
    }

    .article_image,
    .article_images {
        height: 100%;
        width: 100%;
    }
}
</style>