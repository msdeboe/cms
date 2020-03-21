import React from 'react';
import { PostContext } from './context/PostStore';
import { usePost } from './context/PostHook';
import Post from './components/Post';
import './App.css';

const App = () => {
  const post = usePost();
  
  return (
    <PostContext.Provider value={post}>
      <div className="main-page">
        <div className="main-page-content">
          <h1>Fuck</h1>
          {/* <CBTForm
            MinGoodThings={2}
            AddPost={(newPost: IPostItem) => {
              if (postData && postData.posts) {
                const newState = postData.posts.push(newPost);
                return newState;
              }                
            }}
          /> */}
          <div className="post-list">
            <Post/>
          </div>
        </div>
      </div>
    </PostContext.Provider>
  );

}

export default App;
