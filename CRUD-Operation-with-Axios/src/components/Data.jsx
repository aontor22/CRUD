import React from 'react'
import getPost from '../api/PostApi'
import { useEffect, useState } from 'react'
import '../App.css'

const Data = () => {

    const [data, setData] = useState([]);

    const getPostData = async () => {
        try {
            const res = await getPost();
            console.log(res.data);
            setData(res.data); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getPostData();
    }, [])

    return (
        <section className='section-post'>
            <ol>
                {
                    data.map((curElem, index) => {
                        const { id, body, title } = curElem;
                        return <li key={id || index}>
                            <p>Title: {id}. {title}</p>
                            <p>Body: {body}</p>
                            <button>Edit</button>
                            <button className='btn-delete'>Delete</button>
                        </li>
                    })
                }
            </ol>
        </section>
    )
}

export default Data