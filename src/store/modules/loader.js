const state = {
	loading: false
};

const getters = {
	isLoading () {
		return state.loading;
	}
};

const actions = {
	setLoading({ commit }, status) {
		commit('setLoading', status);
	}
};

const mutations = {
	setLoading (state, status) {
		state.loading = status;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}