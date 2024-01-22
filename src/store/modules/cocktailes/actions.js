import axios from 'axios';

export default {
  async A_FETCH_COCKTAILS({ commit }, cocktailCode) {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailCode}`);
      commit('M_SET_COCKTAILS', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};