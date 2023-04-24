export const reports = {
    namespaced: true,
    state: ({
        reports: [],
    }),

    mutations: {
        setReports(state, reports) {
            state.reports = reports;
        }
    },

    actions: {
        async fetchReports({ commit }) {
            try {
                const response = await fetch("https://api.spaceflightnewsapi.net/v4/reports/")
                const api = await response.json();
                commit('setReports', api);
            }
            catch (err) {
                console.log(err);
            }
        }
    }
}