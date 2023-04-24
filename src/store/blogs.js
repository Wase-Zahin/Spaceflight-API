export const blogs = {
    namespaced: true,
    state: () => ({
        blogs: [],
    }),
    mutations: {
        setBlogs(state, blogs) {
            state.blogs = blogs;
        }
    },
    actions: {
        async fetchBlogs({ commit }) {
            try {
                const response = await fetch('https://api.spaceflightnewsapi.net/v4/blogs/');
                const api = await response.json();
                commit('setBlogs', api);
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    // getter: {

    // }
}