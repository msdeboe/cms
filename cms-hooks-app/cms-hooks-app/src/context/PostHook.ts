import { useState, useCallback } from 'react';
import { IPostContext } from './PostStore';
import IPostItem from '../models/IPostItem';
import data from '../testData.json';

export const usePost = (): IPostContext => {
    const PostItems: IPostItem[] = JSON.parse(JSON.stringify(data).toString()) as IPostItem[];
    // const PostItems: IPostItem[] = JSON.parse() as IPostItem[];

    const rawData = JSON.stringify(data).toString();

    console.log(rawData);

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