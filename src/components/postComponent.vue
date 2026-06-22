<template>
  <div>
    <h1>Latest Posts</h1>
    <div>
      <input
        type="text"
        v-model="text"
        placeholder="Write a post..."
      />
      <button v-on:click="createPost">Post</button> 
    </div>
    <p v-if="error">{{ error }}</p>

    <div class="post-container">
      <div
        class="post"
        v-for="(post) in posts"
        :key="post._id"
        @click="deletePosts(post._id)"
      >
        <p>{{ post.text }}</p>
        <small>
         <small>
          {{ new Date(post.createdAt).getDate() }}/
          {{ new Date(post.createdAt).getMonth() + 1 }}/
          {{ new Date(post.createdAt).getFullYear() }}
</small>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import { getPosts, insertPost , deletePost } from '../PostService';
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
  },
  methods: {
    async createPost() {
     
     await insertPost(this.text);
     this.posts = await getPosts();
        
    },
    async deletePosts(id) {
    await deletePost(id);
    this.posts = await getPosts();
}

  }
}

</script>

