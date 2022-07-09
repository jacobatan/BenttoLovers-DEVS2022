import React from "react";

export default function Words(props) {

    const renderWords = props.words.map((word, i) => {
        return (
            <div className="word" key={i}>{word}</div>
        )
    })

    return(
        <div className="words-wrapper">
            {renderWords}
        </div>
        
    )
}