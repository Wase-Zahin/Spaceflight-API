import type { Module } from "vuex";

export interface ArticlesState {
    data: any[],
}

export const articles: Module<ArticlesState, any> = {
    namespaced: true,
    state: {
        data: []
    },

    mutations: {
        setArticles(state: ArticlesState, data: []) {
            state.data = data;
        }
    },

    actions: {
        async fetchData({ commit }) {
            const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/");
            const data = await response.json();
            commit('setArticles', data.results);
            return data;
        }
    }
}