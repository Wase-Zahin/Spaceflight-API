export const counter = {
    state: () => ({
        count: 0
    }),

    actions: {
        increment({ commit, state }) {
            let incrementedCount = state.count + 1;
            commit("setCount", incrementedCount);
        }
    },

    mutations: {
        setCount( state, count ) {
            state.count = count;
        }
    },

    getters: {
        getCount( state ) {
            return state.count;
        }
    }
}