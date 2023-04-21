<template>
    <div>Home</div>
</template>

<script>
import { onMounted } from 'vue';

export default {
    setup() {
        onMounted(() => {
            fetchData()
        })
        const fetchData = async () => {
            let response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/');
            const api = await response.json();
            console.log(api);
            return api
        }

        return {
            fetchData
        }
    }
}
</script>