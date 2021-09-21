<template>
<div class="comments">
  <h3></h3>
  <div class="comments-content">
      <div v-for="(comment,i) in comments" :key="i" class="comment">
          <div>{{comment.email}} </div>
          <div class="comment-text">
            {{comment.body}}
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: "post-page",
  data(){
    return {
      comments:[],
    }
  },
  created(){
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}/comments`)
        .then(response => response.json())
        .then(json => {
          this.comments = json
        })
  }
}
</script>

<style scoped>
.comment{
  margin-bottom: 20px
}
</style>
