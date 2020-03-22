import React from 'react'
import './SummaryText.css'

export interface ISummaryText {
    isDisabled: boolean
    text?: string
}

const SummaryText: React.FC<ISummaryText> = (props) => {
    
    return(
    <div>
        <label>Summary</label>
        <p className="summary-text">{props.text}</p>
    </div>
    
    )
}

export default SummaryText;