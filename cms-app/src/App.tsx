import React, { useState } from 'react';
import './App.css';
import CBTForm from './components/CBTForm';
import PageModel from './models/PageModel';
import PostContext from './context/PostContext';
import IPostItem from './models/IPostItem'

import data from './testData.json';
import Post from './components/Post';

const App = () => {  
  const [postData, addPost] = useState(PostContext);
  
    return (
      <PostContext.Provider value={postData}>
        <div className="main-page">
          <div className="main-page-content">
            <CBTForm
              MinGoodThings={2}
              AddPost={(newPost: IPostItem) => {
                if (postData && postData.posts) {
                  const newState = postData.posts.push(newPost);
                  return newState;
                }                
              }}
            />
            <div className="post-list">
              <Post/>
            </div>
          </div>
        </div>
      </PostContext.Provider>
    );

  return (<div></div>);
  
}

export default App;
