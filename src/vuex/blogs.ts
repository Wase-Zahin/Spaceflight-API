import type { Module } from "vuex";

export interface BlogsState {
    data: any[],
}

export const blogs: Module<BlogsState, any> = {
    namespaced: true,
    state: () => ({
        data: []
    }),
    mutations: {
        setBlogs(state: BlogsState, data: []) {
            state.data = data
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