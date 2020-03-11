import React, { useState } from 'react';
import './App.css';
import CBTForm from './components/CBTForm';
import PageModel from './models/PageModel';
import data from './testData.json';
import IPost from './models/IPost';
import Post from './components/Post';
import IPostItem from './models/IPostItem'
import {PostContextProvider} from './context/PostContext';

const App: React.SFC<PageModel> = () => {
  const jsonData = JSON.stringify(data);  
  const myPosts = JSON.parse(jsonData.toString()) as IPost;

  return (
    <PostContextProvider value={myPosts.Posts}>
      <div className="main-page">
        <div className="main-page-content">
          <CBTForm
            MinGoodThings={2}
          />
          <div className="post-list">
            {myPosts.Posts.map((value, index) =>
              <Post
                postDateTime={value.postDateTime}
                summary={value.summary}
                goodThings={value.goodThings}
                key={index}
              />)}
          </div>
        </div>
      </div>
    </PostContextProvider>


  );
}

export default App;
