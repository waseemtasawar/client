<template>
  <div>
    <h1>Latest Posts</h1>

    <p v-if="error">{{ error }}</p>

    <div class="post-container">
      <div
        class="post"
        v-for="(post) in posts"
        :key="post._id"
      >
        <p>{{ post.text }}</p>
        <small>
          {{ post.createdAt.getDate() }}/
          {{ post.createdAt.getMonth() + 1 }}/
          {{ post.createdAt.getFullYear() }}
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import { getPosts } from '../PostService';
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
      this.posts = await getPosts();
    } catch (error) {
      this.error = error.message;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
