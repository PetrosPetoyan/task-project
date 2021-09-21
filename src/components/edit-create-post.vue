<template>
  <div class="update">
    <input type="text" v-model="postTitle">
    <input type="text" v-model="postId">
    <input type="text" v-model="postText">
    <input type="text" v-model="userId">
    <button @click="saveChanges()">Save</button>
  </div>
</template>

<script>
export default {
  name: "update-post",
  data(){
    return {
      post: {},
      postId: '',
      postText: '',
      userId: '',
      postTitle: ''
    }
  },
  computed:{
    isUpdatePage(){
      return this.$route.path.includes('update')
    }
  },
  methods:{
    saveChanges(){

          fetch(`https://jsonplaceholder.typicode.com/posts/${this.isUpdatePage ?this.$route.params.id :''}`, {
            method: this.isUpdatePage ? 'PUT': 'Post',
            body: JSON.stringify({
              id: this.postId,
              title: this.postTitle,
              body: this.postText,
              userId: this.userId,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
              .then((response) => response.json())
              .then((json) => {
                console.log(json)
              });
      }

  },
  created(){
    if(this.isUpdatePage) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
          .then(response => response.json())
          .then(json => {
            console.log(json)
            this.post = json
            this.postTitle = this.post.title
            this.postId = this.post.id
            this.postText = this.post.body
            this.userId = this.post.userId
          })
    }
  },
}
</script>

<style scoped>
.update{
  max-width: 500px;
  display: flex;
  flex-direction: column;
}
input{
  margin-bottom: 15px;
  height: 35px;
}
</style>
