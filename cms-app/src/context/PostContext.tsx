import React, { createContext } from 'react';
import IPostContext from '../models/IPostContext';
import IPostItem from '../models/IPostItem';
import data from '../testData.json';

const jsonData: IPostItem[] = JSON.parse(JSON.stringify(data).toString()) as IPostItem[];
const PostData: IPostContext = {posts: jsonData};
const PostContext = createContext<IPostContext>(PostData);
export default PostContext;