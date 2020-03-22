import React, { useEffect, useContext } from 'react';
import { PostContext } from '../context/PostStore';
import SummaryText from './SummaryText';
import GoodThingInput from './GoodThingInput';
import './Post.css';

export const Post = () => {
    const { postItems, setPost } = useContext(PostContext);
    useEffect(() => {
        setPost({ summary: "helo" });
    }, [setPost]);
    var postArray: any = [];
    if (postItems && postItems.length > 0) {
        postItems.map((post, postIndex) => {
            const postSummary = post.summary ? post.summary : ' '
            var goodThingArray: any = [];
            if (post.goodThings) {
                post.goodThings.map((goodThing, index) => goodThingArray.push(<li key={index}>{goodThing}</li>));
            }
            const fullPost =
                <div key={postIndex} className="single-post">
                    <h4>{post.postDateTime}</h4>
                    <hr className="style10"></hr>
                    <ol>
                        {goodThingArray}
                    </ol>
                    <SummaryText
                        isDisabled={true}
                        text={postSummary}
                    />

                </div>;
            postArray.push(fullPost);
        });
        return (postArray);
    }

    return (<div></div>)
}

export default Post;