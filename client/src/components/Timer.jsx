import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer"

export default function Timer(props) {

    const[seconds, setSeconds] = useState(props.timer);
    const ref = useRef(null);

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className="timer">Too lale...</div>;
        }

        return (
            <div className="timer">
                <div className="text">{seconds}</div>
            </div>
        );
    };

    // useEffect(() => {
    //     if (seconds !== 0) {
    //         ref.current = setTimeout(() => {
    //             setSeconds(seconds - 1);
    //         }, 1000);
    //     } else {
    //         clearTimeout(ref.current);
    //     }
    // });

    const timerProps = {
        isPlaying: true,
        size: 120,
        strokeWidth: 6
    };

    return (
        <div className="timer-wrapper">
            <CountdownCircleTimer
                {...timerProps}
                isPlaying
                initialRemainingTime={60}
                duration={60}
                colors={[["#3f51b5"]]}
                onComplete={() => console.log("times up")}
            >
                {({ elapsedTime }) => {
                //console.log(hourSeconds - elapsedTime / 1000);
                    return renderTime(seconds);
                }}
            </CountdownCircleTimer>
        </div>
    )
}