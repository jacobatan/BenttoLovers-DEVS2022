import React from "react";
import { useEffect,  useState } from "react";

export default function Timer(props) {

    const[seconds, setSeconds] = useState(props.timer);

    useEffect(() => {
        let interval = null;
        if (props.isActive) {
            interval = setInterval(() => {
                if(seconds >0) {
                    setSeconds(seconds => seconds - 1);
                }
                if(seconds === 0) {
                    clearInterval(interval);
                    
                }
            }, 1000);
        } else if (!props.isActive && seconds !== 0) {
            clearInterval(interval);
        }
    
        return () => clearInterval(interval);
    }, [seconds, props.isActive]);



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