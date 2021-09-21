<template>
  <div class="posts">
    <div class="posts-head">
      <button @click="goToCreate()">Create post</button>
    </div>
    <div class="posts-content">
      <post-card v-for="(post,i) in posts" :key="i" :post-data="post" @postDeleted="removeDeletedPost"/>
    </div>
  </div>
</template>

<script>
import PostCard from "../../components/post-card.vue";
export default {
  name: "posts",
  data(){
    return {
      posts: [],
    }
  },
  methods:{
    removeDeletedPost(postId){
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
      })
    },
    goToCreate(){
      this.$router.push('/create-post')
    }
  },
  created(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            this.posts = json
        })
  },
  components:{
    PostCard
  }
}
</script>

<style scoped>
.posts-head{
  display: flex;
  justify-content: flex-end;
  margin: 20px 0 35px 0;
}
button{
  width: 250px;
  padding: 15px 0;
}
</style>
