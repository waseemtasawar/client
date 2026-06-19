import axios from "axios";


const API_URL = "http://localhost:5000/api/posts/";


class PostService {
    // Get Posts
    static  getPosts() {
        new Promise((resolve, reject) => {
        try{
            const res = axios.get(API_URL);
            const data = res.data;
            resolve(
                data.map(post =>({
                    ...post,
                    createdAt: new Date(post.createdAt)
                }))
            );
        } catch (err) { 
            reject(err);}
        })
    }

    // Add Post
    static insertPost(text) {
        return axios.post(API_URL, {text});
    }

    // Delete Post
    static deletePost(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default PostService;