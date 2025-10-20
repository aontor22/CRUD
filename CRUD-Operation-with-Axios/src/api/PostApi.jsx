import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

// GET Method
export const getPost = () => {
    return api.get("/posts");
}

// POST Method
export const postData = (post) => {
    return api.post('/posts', post);
}

// DELETE Method
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}

// PUT Method
export const updatePost = (id, post) => {
    return api.put(`/posts/${id}`, post);
}