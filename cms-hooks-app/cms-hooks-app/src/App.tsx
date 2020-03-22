import React from 'react';
import { PostContext } from './context/PostStore';
import { usePost } from './context/PostHook';
import Post from './components/Post';
import CBTForm from './components/CBTForm';
import IPostItem from './models/IPostItem';
import './App.css';

const App = () => {
  const post = usePost();

  return (
    <PostContext.Provider value={post}>
      <div className="main-page">
        <h1>CBT</h1>
        <div className="main-page-content">
          <CBTForm
            MinGoodThings={2}
          />
          <div className="post-list">
            <Post />
          </div>
        </div>
      </div>
    </PostContext.Provider>
  );

}

export default App;
