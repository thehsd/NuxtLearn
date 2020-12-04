import Vuex from 'vuex'
import data from '~/api/data.json'

const store = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      psts: [],
    },

    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve) => {
          vuexContext.commit('setPosts', data)
          resolve()
        })
      },
      setPosts({ commit }, posts) {
        commit('setPosts', posts)
      },

      async getPosts({ commit }) {
        const poosts = await this.$axios.$get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        )
        commit('getPosts', psts)
      },
    },

    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },

      getPosts(state, poosts) {
        state.psts = poosts
      },
    },

    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      poosts(state) {
        return state.psts
      },
    },
  })
}
export default store
