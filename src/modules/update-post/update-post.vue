<template>
  <div class="update">
    <edit-create-post/>
  </div>
</template>

<script>
import EditCreatePost from "../../components/edit-create-post.vue";
export default {
  name: "update-post",
  components:{
    EditCreatePost
  }
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
