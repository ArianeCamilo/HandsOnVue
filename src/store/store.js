/* eslint-disable */
// Importando o Vue para saber que está fora da instância
import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: []
  },

  actions: { // guarda ações (funções disparadas pelo Vuex para atualizar os dados)
    loadPostsList: function ({ commit }) { // indica que uma action foi disparada
      Api().get('/posts')
        .then((response) => { // processo assíncrono
          commit('SET_POSTS_LIST', { list: response.data }, (err) => { // commitando mutations e tratando erros
            console.log(err)
          })
        })
    }
  },

  async createPost ({ state, dispatch, commit }, newPostInfo) {
    await Api().post('posts', { user: newPostInfo.user, title: 'title', content: newPostInfo.content }) // rota na API
  },
  async deletePost ({ state, dispatch, commit }, post) {
    await Api().delete(`posts/${post._id}`)
    return dispatch('loadPostList', { commit }) // dispara a action
  },
  mutations: {
    SET_POSTS_LIST: (state, { list }) => {
      state.posts = list
    }
  },
  getters: {
    getPostList: state => state.post
  }
})

export default store
