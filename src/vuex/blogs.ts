import type { Module } from "vuex";

export interface BlogsState {
    id: string,
    title: string,
    published_at: string,
}

export const blogs: Module<BlogsState, any> = {
    namespaced: true,
    state: () => ({
        id: '',
        title: '',
        published_at: '',
    }),
    mutations: {
        setBlogs(state: BlogsState, data: BlogsState) {
            Object.assign(state, data);
        }
    },
    actions: {
        async fetchData({ commit }) {
            const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/");
            const data = await response.json();
            commit('setBlogs', data.results);
            return data;
        }
    },
}