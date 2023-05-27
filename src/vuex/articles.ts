import type { Module } from "vuex";

export interface ArticlesState {
    id: string,
    image_url: string,
}

export const articles: Module<ArticlesState, any> = {
    namespaced: true,
    state: {
        id: '',
        image_url: '',
    },

    mutations: {
        setArticles(state: ArticlesState, data: ArticlesState) {
            Object.assign(state, data);
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