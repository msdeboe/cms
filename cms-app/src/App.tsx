import React, { useState } from 'react';
import './App.css';
import CBTForm from './components/CBTForm';
import PageModel from './models/PageModel';
import IPost from './models/IPost';
import IPostItem from './models/IPostItem'
import IPostContext from './models/IPostContext';

import data from './testData.json';
import Post from './components/Post';
import {PostContextProvider} from './context/PostContext';

const App: React.SFC<PageModel> = () => {
  const jsonData = JSON.stringify(data);  
  const postData = JSON.parse(jsonData.toString()) as IPost;
  const [posts, addPost] = useState(postData);
  return (
    <PostContextProvider value={posts}>
      <div className="main-page">
        <div className="main-page-content">
          <CBTForm
            MinGoodThings={2}
            AddPost={(newPost: IPostItem) => {
              const newState = posts.Posts.push(newPost);
              return newState;
            }}
          />
          <div className="post-list">
            <Post/>
          </div>
        </div>
      </div>
    </PostContextProvider>


  );
}

export default App;
