import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer"

export default function Timer(props) {

    const[seconds, setSeconds] = useState(props.timer);

    // const renderTime = ({ remainingTime }) => {
    //     if (remainingTime === 0) {
    //         return <div className="timer">Too lale...</div>;
    //     }

    //     return (
    //         <div className="timer">
    //             <div className="text">{seconds}</div>
    //         </div>
    //     );
    // };


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

    // const timerProps = {
    //     isPlaying: true,
    //     size: 120,
    //     strokeWidth: 6
    // };

    return (
        <div className="timer">
            {/* <CountdownCircleTimer
                {...timerProps}
                isPlaying
                initialRemainingTime={60}
                duration={60}
                colors={[["#3f51b5"]]}
                onComplete={() => console.log("times up")}
            > */}
                {/* {({ elapsedTime }) => {
                //console.log(hourSeconds - elapsedTime / 1000);
                    return renderTime(seconds);
                }}
            </CountdownCircleTimer> */}
            {seconds}
        </div>
    )
}