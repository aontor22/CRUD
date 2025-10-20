import { useState, useEffect } from 'react';
import { createNewPost, updatePostById } from '../services/PostService';

export const usePostForm = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });

    const isEmpty = Object.keys(updateDataApi).length === 0;

    useEffect(() => {
        updateDataApi &&
            setAddData({
                title: updateDataApi.title || "",
                body: updateDataApi.body || "",
            });
    }, [updateDataApi]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addPostData = async () => {
        try {
            const newPost = await createNewPost(addData);
            setData([...data, newPost]);
            setAddData({ title: "", body: "" });
        } catch (error) {
            console.error("Failed to add post:", error.message);
        }
    };

    const updatePostData = async () => {
        try {
            const updatedPost = await updatePostById(updateDataApi.id, addData);
            setData((prev) =>
                prev.map((curElem) =>
                    curElem.id === updatedPost.id ? updatedPost : curElem
                )
            );
            setAddData({ title: "", body: "" });
            setUpdateDataApi({});
        } catch (error) {
            console.log("Failed to update post:", error.message);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.value;
        if (action === 'Add') {
            addPostData();
        } else if (action === 'Edit') {
            updatePostData();
        }
    };

    return {
        addData,
        isEmpty,
        handleInputChange,
        handleFormSubmit,
    };
};