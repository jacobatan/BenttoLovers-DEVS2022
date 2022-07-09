import React from "react";

export default function Button(props) {

    return(
        <button id={props.id} type={props.type} data-text={props.buttonAction} className={`button ${props.buttonClass}`} onClick={props.function}>
            <span value={props.value} className="actual-text">&nbsp;{props.text}&nbsp;</span>
            <span className="hover-text" aria-hidden="true">&nbsp;{props.text}&nbsp;</span>
        </button>
    )
}