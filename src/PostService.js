import axios from "axios";

const API_URL = "http://localhost:5000/api/posts/";

// Get Posts
export const getPosts = async () => {
  const res = await axios.get(API_URL);

  return res.data.map(post => ({
    ...post,
    createdAt: new Date(post.createdAt)
  }));
};

// Add Post
export const insertPost = (text) => {
  return axios.post(API_URL, { text });
};

// Delete Post
export const deletePost = (id) => {
  return axios.delete(`${API_URL}${id}`);
};