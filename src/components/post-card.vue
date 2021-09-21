<template>
  <div class="post">
    <h2>{{postData.title}}</h2>
    <div class="post-text">
      {{postData.body}}
    </div>
    <div class="post-buttons">
       <button @click="changePage(`/comments-page/${postData.id}`)">See comments</button>
       <button @click="changePage(`/view-post/${postData.id}`)">View</button>
       <button @click="changePage(`/update/${postData.id}`)">Update</button>
       <button @click="removePost">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
  props:{
    postData: {
      type: Object,
      default: ()=>{}
    }
  },
  methods:{
    changePage(link){
      this.$router.push(link)
    },
    removePost(){
      this.$emit('postDeleted', this.postData.id)
    }
  }
}
</script>

<style>
.post{
  border: 1px solid red;
  margin-bottom: 10px;
  padding: 10px;
}
.post-buttons{
  margin-top: 15px;
}
.post-buttons button{
  margin-right: 15px;
}
</style>
