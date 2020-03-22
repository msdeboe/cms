import { useState, useCallback } from 'react';
import { IPostContext } from './PostStore';
import IPostItem from '../models/IPostItem';
import data from '../testData.json';

export const usePost = (): IPostContext => {
    const PostItems: IPostItem[] = JSON.parse(JSON.stringify(data).toString()) as IPostItem[];
    const [stateObj, setStateObj] = useState({postItems: PostItems});
    const setPost = useCallback((currentVal: IPostItem): void => {
        setStateObj(oldStateObj => ({...oldStateObj, ...currentVal}));
    }, []);

    const context: IPostContext = {
        ...stateObj,
        setPost
    }

    return context;
}