export const articles = {
    namespaced: true,
    state: () => ({
        articles: [],
    }),
    mutations: {
        setArticles(state, articles) {
            state.articles = articles;
        }
    },
    actions: {
        async fetchArticles({ commit }) {
            try {
                const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/');
                const api = await response.json();
                commit('setArticles', api);
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    // getter: {

    // }
}