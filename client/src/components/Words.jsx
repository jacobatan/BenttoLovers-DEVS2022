import React from "react";

export default function Words(props) {

    const renderWords = props.words.map((word, i) => {
        return (
            <div key={i}>
                <button className="words-text">
                    {word}
                </button>
            </div>
        )
    })
    
    return(
        <div className="words-wrapper">
            <div className="words">
                {renderWords}
            </div>
        </div>
        
    )
}