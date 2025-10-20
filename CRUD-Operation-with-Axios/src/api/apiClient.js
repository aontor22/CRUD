import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

apiClient.interceptors.response.use(
    (response) => {
        return {
            ok: true,
            status: response.status,
            data: response.data,
            error: null,
        };
    },
    (error) => {
        const status = error.response?.status || 0;
        const message = error.response?.data?.error?.message || error.message || 'An unknown error occurred';

        return Promise.resolve({
            ok: false,
            status: status,
            data: null,
            error: message,
        });
    }
);

export default apiClient;