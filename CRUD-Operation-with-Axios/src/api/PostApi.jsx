import axios from "axios";
import React from 'react'

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

const PostApi = () => {
    return api.get("/posts");
}

export default PostApi
