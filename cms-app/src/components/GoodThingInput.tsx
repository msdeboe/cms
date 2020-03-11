import React from 'react';

const GoodThingInput: React.FC = (props) => {
    return(
        <div>
            <label style={{marginRight:"3px"}}>Good Thing: </label>
            <input style={{width:"100%", marginBottom:"5px"}}></input>
        </div>
    )
}

export default GoodThingInput;