import React, { useContext, useEffect, useState } from 'react';
import ICBTForm from '../models/ICBTForm';
import GoodThingInput from './GoodThingInput';
import SummaryText from './SummaryText';
import { PostContext } from '../context/PostStore';
import './CBTForm.css';

const CBTForm: React.FC<ICBTForm> = (props) => {
    let [goodThingCount, setGoodThingCount] = useState(2);
    const { postItems, setPost } = useContext(PostContext);
    useEffect(() => {
        setPost({ summary: "helo" });
    }, [setPost]);

    const handleAddGoodThing = (event: any) => {
        event.preventDefault();
        setGoodThingCount(goodThingCount += 1);
        console.log(event);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(event.target);
    }

    var goodThingArray = [];

    for (var i = 0; i < goodThingCount; i++) {
        goodThingArray.push(<GoodThingInput key={i} isdisabled={false} />);
    }

    console.log(goodThingCount);
    return (
        <div className="cbt-form">
            <form onSubmit={handleSubmit}>
                <label>Good Things</label>
                {goodThingArray}
                <label>Summary</label>
                <textarea className="summary-text" rows={4}></textarea>
                <br />
                <button onClick={handleAddGoodThing} style={{marginRight:"5px"}} className="btn btn-secondary">Add Good Thing</button>
                <input type="submit" className="btn btn-primary"/>               
            </form>
            <br />
        </div>
    )
}

export default CBTForm;