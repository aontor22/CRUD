import axios from "axios";
import React from 'react'

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

// Get Method

export const PostApi = () => {
    return api.get("/posts");
}

// Delete Method

export const DeletePost = (id) => {
    return api.delete(`/posts/${id}`);
}

