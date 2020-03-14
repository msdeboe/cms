import React, { createContext } from 'react';
import IPost from '../models/IPost';
import IPostContext from '../models/IPostContext';

const PostContext = createContext<IPost | null>(null);

export const PostContextProvider = PostContext.Provider;

export const PostContextConsumer = PostContext.Consumer;

export default PostContext;