import React, { useEffect, useContext } from 'react';
import { PostContext } from '../context/PostStore';
import IPostItem from '../models/IPostItem';
import { usePost } from '../context/PostHook';
import './Post.css';

export const Post = () => {
    const { postItems, setPost } = useContext(PostContext);
    useEffect(() => {
        setPost({ summary: "helo" });
    }, [setPost]);
    var postArray: any = [];
    if (postItems && postItems.length > 0) {        
        postItems.map((post, postIndex) => {
            var goodThingArray: any = [];
            if (post.goodThings) {
                post.goodThings.map((goodThing, index) => goodThingArray.push(<li key={index}>{goodThing}</li>));
            }
            const fullPost =
                <div key={postIndex} className="single-post">
                    <h6>Good Things</h6>
                    <ul className="good-things">
                        {goodThingArray}
                    </ul>
                    <h6>Summary</h6>
                    <p>{post.summary}</p>
                    <p className="post-date">Posted: {post.postDateTime}</p>
                </div>;
            postArray.push(fullPost);
        });
        return (postArray);
    }

    return (<div></div>)
}

export default Post;