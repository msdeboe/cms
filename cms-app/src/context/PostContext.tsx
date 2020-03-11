import React, { createContext, Component } from 'react';
import IPostItem from '../models/IPostItem';

export interface PostContextInterface {
    posts: IPostItem[]
}

const PostContext = createContext<IPostItem[] | null>(null);

export const PostContextProvider = PostContext.Provider;

export const PostContextConsumer = PostContext.Consumer;

export default PostContext;