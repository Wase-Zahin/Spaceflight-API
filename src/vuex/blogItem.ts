import type { Module } from "vuex";

export interface BlogsItemState {
    id: string,
    image_url: string,
    summary: string,
    published_at: string,
    title: string,
    url: string,
}

export const BlogsItem: Module<BlogsItemState, any> = {
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
        setBlogsItem(state: BlogsItemState, payload: BlogsItemState) {
            Object.assign(state, payload);
        }
    },
    actions: {
        async fetchData({ commit }, id: string) {
            const response = await fetch(`https://api.spaceflightnewsapi.net/v4/blogs/${id}/`);
            const data = await response.json();
            console.log(data)
            commit('setBlogsItem', data);
        }
    }
} 