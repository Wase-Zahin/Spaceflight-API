<template>
    <div>
        <button @click="Btn">click</button>
        <div>
            {{ count }}
        </div>
    </div>
</template>

<script>

import { ref } from 'vue';
import store from '../store/index';
import { computed } from 'vue';

import { useStore } from 'vuex'

export default {
    setup() {
        const s = useStore()

        const getCounter = computed(() => {
            console.log(store)
            return s.getters.getCount       
        }, [store.getters.getCount])

        const count = ref(store.getters.getCount)
        console.log(count.value);

        const Btn = () => {
            console.log(store.getters.getCount)
            store.dispatch('increment')
        }

        return {
            getCounter,
            Btn,
            count
        }
    }
}
</script>