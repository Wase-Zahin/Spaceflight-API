export const counter = {
    state: () => ({
        count: 0
    }),

    getters: {
        getCount( state ) {
            return state.count;
        }
    },
    
    mutations: {
        setCount( state ) {
            state.count += 1;
        }
    },

    actions: {
        increment({ commit }, count) {
            commit("setCount", count);
        }
    }
}