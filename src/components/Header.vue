<template>
    <div class="headerWrapper">
        <div class="header">
            <h1>Spaceflight News</h1>
            <Fold class="menu" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Fold from '~icons/ep/fold'

</script>

<style scoped lang="scss">
.headerWrapper {
    padding: 1rem;
    width: 100%;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            color: crimson;

            @media screen and (max-width: 768px) {
                margin: auto;
            }
        }

        .menu {
            @media screen and (max-width: 768px) {
                display: none;
            }
        }
    }
}
</style>
