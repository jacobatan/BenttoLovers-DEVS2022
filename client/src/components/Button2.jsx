import React from "react";

export default function Button(props) {

    return(
        <button id={props.id} type={props.type} value={props.value} data-text={props.buttonAction} className={`button ${props.buttonClass}`} onClick={e=>props.function(e)}>
            <span  className="actual-text">&nbsp;{props.text}&nbsp;</span>
            <span className="hover-text" aria-hidden="true">&nbsp;{props.text}&nbsp;</span>
        </button>
    )
}