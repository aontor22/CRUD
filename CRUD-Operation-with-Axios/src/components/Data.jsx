import React from 'react';
import { fetchAllPosts, deletePostById } from '../services/PostService';
import { useEffect, useState } from 'react';
import '../App.css';
import { Form } from './Form';

const Data = () => {
    const [data, setData] = useState([]);
    const [updateDataApi, setUpdateDataApi] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getPostData = async () => {
        try {
            setLoading(true);
            setError(null);
            const posts = await fetchAllPosts();
            setData(posts);
        } catch (error) {
            console.error("Error fetching data:", error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPostData();
    }, []);

    const handleDeletePost = async (id) => {
        try {
            await deletePostById(id);
            const newUpdatedPost = data.filter((curPost) => curPost.id !== id);
            setData(newUpdatedPost);
        } catch (error) {
            console.log("Failed to delete post:", error.message);
        }
    };

    const handleEditClick = (postToEdit) => {
        setUpdateDataApi(postToEdit);
    };

    if (loading)
        return <h2>Loading posts...</h2>;
    if (error)
        return <h2>Error: {error}</h2>;

    return (
        <section className='section-post'>
            <div className="section-form">
                <Form
                    data={data}
                    setData={setData}
                    updateDataApi={updateDataApi}
                    setUpdateDataApi={setUpdateDataApi}
                />
            </div>

            <ol>
                {data.map((curElem) => {
                    const { id, body, title } = curElem;
                    return (
                        <li key={id}>
                            <p>Title: {id}. {title}</p>
                            <p>Body: {body}</p>
                            <button onClick={() => handleEditClick(curElem)}>Edit</button>
                            <button className='btn-delete' onClick={() => handleDeletePost(id)}>Delete</button>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
};

export default Data;