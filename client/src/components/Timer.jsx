import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";

export default function Timer(props) {

    const[seconds, setSeconds] = useState(props.timer);




    useEffect(() => {
        let interval = null;
        if (props.isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (!props.isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [props.isActive, seconds]);



    return (
        <div className="timer-wrapper">
            <h1>
                BenttoLovers 
            </h1>
            <span>
                {seconds}
            </span> 
        </div>
    )
}