<template>
  <div class="view-post">
    <div class="post-all-data">
      <h1>{{post.title}}</h1>
      <p>Post id{{post.id}} </p>
      <p>{{post.body}}</p>
      <p>user id {{post.userId}} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "view-post",
  data(){
    return {
      post: {}
    }
  },
  created(){
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
        .then(response => response.json())
        .then(json => {
          this.post = json
        })
  },
}
</script>

<style scoped>

</style>
