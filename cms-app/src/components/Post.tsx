import React, { useContext } from 'react';
import IPostItem from '../models/IPostItem';
import PostContext from '../context/PostContext';
import '../styles/Post.css';

const Post: React.FC = () => {
    const postContext = useContext(PostContext);
    var postArray: any = [];
    if (postContext) {
        postContext.Posts.map((post, postIndex) => {
            var goodThingArray: any = [];
            post.goodThings.map((goodThing, index) => goodThingArray.push(<li key={index}>{goodThing}</li>));
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

    return (<div></div>);
}

export default Post;