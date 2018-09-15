<template>
    <div>
        <h1>Posts</h1>
    <div v-for="post in postList" :key="post._id">
        <p>
            <span v-text="post.user"> </span>
            <span v-text="post.content"></span>
        </p>
    </div>
    </div>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'posts',
  computed: {
    ...mapGetters(['getPostsList']),

    postList () { // computed property - dado computado pelo menos uma vez; precisa informar que foi alterado para que seja atualizado
      let list = this.getPostsList
      return list.reverse() // inverte a ordem dos posts ( novos > antigos)
    }
  }
}
</script>
