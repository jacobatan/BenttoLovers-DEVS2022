import React from "react";

export default function Words(props) {

    const renderWords = props.words.map((word, i) => {
        return (
            <span className="wordsRap" key={i}>{word}</span>
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