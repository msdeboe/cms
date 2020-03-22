import React, { useContext, useState } from 'react';
import ICBTForm from '../models/ICBTForm';
import GoodThingInput from './GoodThingInput';
import PostContext from '../context/PostContext';
import '../styles/CBTForm.css';

const CBTForm: React.FC<ICBTForm> = (props) => {
    const postContext = useContext(PostContext);
    const [post, addPost] = useState(postContext);


    var goodThingArray = [];

    for (var i = 0; i < props.MinGoodThings; i++) {
        goodThingArray.push(<GoodThingInput key={i} />);
    }

    return (
        <div className="cbt-form">
            {goodThingArray}
            <br />
            <h6>Summary</h6>
            <textarea style={{ width: "100%", marginBottom: "10px" }} rows={5}></textarea>
            <br />
            <button onClick={props.AddPost()} className="btn btn-primary">
                Submit
            </button>
        </div>
    )
}

export default CBTForm;