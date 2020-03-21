import { createContext } from 'react';
import IPostItem from '../models/IPostItem';
import data from '../testData.json';

export interface IPostContext {
    postItems?: IPostItem[]
    setPost: (currentVal: IPostItem) => void;
}

const PostItemData: IPostItem[] = JSON.parse(JSON.stringify(data).toString()) as IPostItem[];
const Posts: IPostContext = {
    postItems: PostItemData,
    setPost: () => {}
}

export const PostContext = createContext<IPostContext>(Posts);