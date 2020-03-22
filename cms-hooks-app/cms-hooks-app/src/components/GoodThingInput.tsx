import React from 'react';

export interface IGoodThingInput {
    isdisabled: boolean
    text?: string
}

const GoodThingInput: React.FC<IGoodThingInput> = (props) => {
    const goodThingText = props.text ? props.text : "";
    return(
        <div>            
            <input type="text" disabled={props.isdisabled} style={{width:"100%", marginBottom:"5px"}}/>
        </div>
    )
}

export default GoodThingInput;