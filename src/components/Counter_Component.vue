<template>
    <div>
        <button @click="Btn">click</button>
        <p>
            count: {{ getCounter }} 
        </p>
    </div>
</template>

<script>

import { ref } from 'vue';
import { computed } from 'vue';
// import { useStore } from 'vuex'
import store from '@/store';

export default {
    setup() {
        // const store = useStore()
        let count = ref(0);

        const getCounter = computed(() => {
            return count  
        })

        const Btn = () => {
            store.dispatch('increment', store.getters.getCount)
            console.log(store.getters.getCount)
            count.value = store.getters.getCount
        }

        return {
            getCounter,
            Btn,
            count
        }
    }
}
</script>