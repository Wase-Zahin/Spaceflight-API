import type { Module } from "vuex";

export interface ArticleItemState {
    id: string,
    image_url: string,
    summary: string,
    published_at: string,
    title: string,
    url: string,
}

export const ArticleItem: Module<ArticleItemState, any> = {
    namespaced: true,
    state: {
        id: '',
        image_url: '',
        summary: '',
        published_at: '',
        title: '',
        url: '',
    },

    mutations: {
        setArticleItem(state: ArticleItemState, payload: ArticleItemState) {
            Object.assign(state, payload);
        }
    },
    actions: {
        async fetchData({ commit }, id: string) {
            const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}/`);
            const data = await response.json();
            console.log(data)
            commit('setArticleItem', data);
        }
    }
}