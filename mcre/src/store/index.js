import Vue from "vue";
import Vuex from "vuex";

import lactic from '@/assets/lactic.json';

Vue.use(Vuex);

export const state = {
  app: {
    cache: {'1': lactic}
  },
};

export const getters = {
    getRecipe: (state) => (id) => {
        return state.app.cache[id] || null;
    }
};

// Mutations are synchronous.
export const mutations = {
    putRecipe(state, {id, recipe}) {
        state.app.cache[id] = recipe;
    },
};

// Actions are asynchronous.
export const actions = {
};

export const modules = {};

let store;

export default () => {
  if (!store) {
    store = new Vuex.Store({
      state,
      getters,
      mutations,
      actions,
      modules,
    });
  }
  return store;
};
