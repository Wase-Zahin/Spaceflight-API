<template>
    <div class="headerWrapper">
        <div class="header">
            <h1>Spaceflight News</h1>
            <div class="navBar">
                <h3>Articles</h3>
                <p>|</p>
                <h3>Blogs</h3>
                <p>|</p>
                <h3>Reports</h3>
            </div>
            <!-- <Fold class="menu" /> -->
        </div>
    </div>
</template>

<script setup lang="ts">
// import Fold from '~icons/ep/fold'

</script>

<style scoped lang="scss">
.headerWrapper {
    width: 100%;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            color: crimson;

            @media screen and (max-width: 768px) {
                margin: auto;
                padding: 1rem 0;
            }
        }

        .navBar {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            gap: 1rem;

            p {
                color: #FFC50B;
            }

            h3 {
                @media screen and (max-width: 768px) {
                    color: rgb(255, 255, 255);
                    font-weight: 200;
                }
            }

            @media screen and (max-width: 768px) {
                background-color: rgb(64, 64, 64);
                padding: 1rem;
                justify-content: center;
            }
        }

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
    }
    @media screen and (min-width: 768px) {
        padding: 1rem;
    }
}
</style>
