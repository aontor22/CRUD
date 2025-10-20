import apiClient from '../api/apiClient';

export async function fetchAllPosts() {
    const response = await apiClient.get('/posts');
    if (!response.ok) {
        throw new Error(response.error);
    }
    return response.data;
}

export async function createNewPost(post) {
    const response = await apiClient.post('/posts', post);
    if (!response.ok) {
        throw new Error(response.error);
    }
    return { ...post, id: response.data.id || Date.now() };
}

export async function deletePostById(id) {
    const response = await apiClient.delete(`/posts/${id}`);
    if (!response.ok) {
        throw new Error(response.error);
    }
    return response.data;
}

export async function updatePostById(id, post) {
    const response = await apiClient.put(`/posts/${id}`, post);
    if (!response.ok) {
        throw new Error(response.error);
    }
    return response.data;
}