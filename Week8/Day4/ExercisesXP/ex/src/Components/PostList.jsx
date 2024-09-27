import React, {useEffect, useState} from 'react';
import fetchData from "./FetchData.js";



const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPosts  = async () => {
            const posts = await fetchData('/dataEx2.json');
            setPosts(posts);
        };
        loadPosts ();
    }, []);
    return (
        <div>
            <h1>Hi This is a Title</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList;