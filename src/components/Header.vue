<template>
    <div className="headerWrapper">
        <div className='header'>
            <div className='bigScreen'>
                <router-link to="/">
                    <h1 className='logo'>Spaceflight News</h1>
                </router-link>
                <div className='searchBar'>
                    <EditPen style="height: 1rem; width: 1rem; position: absolute; left: 0; top: 18%; " />
                    <input />
                </div>
                <div className='navLinks'>
                    <router-link to="/">Home</router-link>
                    <router-link to="/blogs">Blogs</router-link>
                    <router-link to="/articles">Articles</router-link>
                    <router-link to="/info">Info</router-link>
                    <router-link to="/reports">Reports</router-link>
                </div>
            </div>

            <div className='smallScreen'>
                <div className='logoMenu'>
                    <router-link to="/">
                        <h1 className='logo'>Spaceflight News</h1>
                    </router-link>
                    <Fold @click="toggleMenu" style="width: 20px; height: 20px; cursor: pointer;" />
                </div>

                <div v-if="menuOpen" className='navLinks'>
                    <div className='searchBar'>
                        <EditPen style="height: 1rem; width: 1rem; position: absolute; left: 0; top: 18%;" />
                        <input />
                    </div>
                    <router-link to="/">Home</router-link>
                    <router-link to="/blogs">Blogs</router-link>
                    <router-link to="/articles">Articles</router-link>
                    <router-link to="/info">Info</router-link>
                    <router-link to="/reports">Reports</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router';
import { ref } from 'vue';
import { Fold, EditPen } from '@element-plus/icons-vue';

export default {
    setup() {
        const menuOpen = ref(false);
        function toggleMenu() {
            menuOpen.value = !menuOpen.value;
        }

        return {
            menuOpen,
            toggleMenu,
        };
    },
    components: { router, Fold, EditPen }
}
</script>

<style>
.headerWrapper {
    padding: 10px 16px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.header {
    margin: auto;
    max-width: 1100px;
}

.header a {
    all: initial;
    margin: 0;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

.header a:hover {
    background-color: #f5f5f5;
}

.bigScreen {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.searchBar {
    position: relative;
}

.searchBar input {
    padding: 6px 25px;
    border: none;
    border-bottom: 1px solid black;
    height: 12px;
    width: 150px;
}

.searchBar input:focus {
    outline: 0;
    border-bottom: 1px solid red;
}

.searchIcon {
    position: absolute;
    left: 0;
    top: 18%;
}

.navLinks {
    display: flex;
    gap: 10px;
}

.smallScreen {
    display: none;
}

.logoMenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: crimson;
    font-weight: 800;
}

@media screen and (max-width: 768px) {
    .bigScreen {
        display: none;
    }

    .smallScreen {
        display: block;
    }

    .navLinks {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 25px 0;
    }
}</style>