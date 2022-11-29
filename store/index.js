export const state = () => ({
    data: {},
    countries: [],
})

export const actions = {
    async FETCH_SUMARRRY({ commit }) {
        const { data } = await this.$axios.get('https://api.covid19api.com/summary')
        commit('SET_GLOBAL', data.Global)
        commit('SET_COUNTRIES', data.Countries)
    },
    async FETCH_COUNTRY({ commit }, id) {
        const { data } = await this.$axios.get('https://api.covid19api.com/summary')
        const country = data.Countries.find(country => country.ID === id)
        commit('SET_COUNTRY', country)
    }
}
export const mutations = {
    SET_GLOBAL(state, data) {
        state.data = data
    },
    SET_COUNTRY(state, data) {
        state.data = data
    },
    SET_COUNTRIES(state, countries) {
        state.countries = countries
    }
}

export const getters = {
    countries: state => state.countries,
    data: state => state.data
}