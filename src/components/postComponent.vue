<template>
  
</template>

<script>
import PostService from '../PostService';
export default {
  name: 'PostComponent',
  data() {
    return {
     posts: [],
     error: '',
     text: ''
    }
  },
  async created(){
    try{
      this.posts = await PostService.getPosts();
    } catch (error) {
      this.error = error.message;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
