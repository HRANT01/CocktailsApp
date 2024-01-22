import { createStore } from 'vuex';
import cocktailsState from '../store/modules/cocktailes/state.js';
import cocktailsMutations from '../store/modules/cocktailes/mutations.js';
import cocktailsActions from '../store/modules/cocktailes/actions.js';
import cocktailsGetters from '../store/modules/cocktailes/getters.js';

const store = createStore({
  modules: {
    cocktails: {
      state: cocktailsState,
      mutations: cocktailsMutations,
      actions: cocktailsActions,
      getters: cocktailsGetters,
    },
  },
});

export default store;
