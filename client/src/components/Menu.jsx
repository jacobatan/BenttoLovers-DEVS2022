import React, {useEffect, useRef, useState} from 'react'
import TRUNK from 'vanta/dist/vanta.trunk.min'
import * as THREE from 'three'
import * as p5 from 'p5'
import Button from './Button'
import Button2 from './Button2'
import Timer from './Timer'
import Words from './Words'
import Modal from './Modal'

export default function Menu() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const backgroundRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const words = ["CRIB","RAMEN", "COUCH", "DRINK"];
    const [modal, setModal] = useState(false);
    const [whichDifficuilty, setwhichDifficuilty] = useState(null);
    const difficulty = ["EASY", "Medium", "Hard"]

    const handleDifficuilty = (event) => {
        event.preventDefault();
        setwhichDifficuilty(event.target.innerText);
        startGame();
    }

    const renderDifficuilty = difficulty.map((dif, i) => {
        return (
            <Button2 id={dif} value={dif} name={dif} buttonAction={dif} key={i} text={dif} buttonClass=""
                     function={handleDifficuilty}/>
        )
    });

    const toggle = () => {
        setModal(!modal);
    };

    function startGame() {
        setIsActive(!isActive);
        setModal(!modal);
    }

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(TRUNK({
                el: backgroundRef.current,
                p5: p5,
                THREE: THREE,
                color: "#37FF8B",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 375.00,
                minWidth: 375.00,
                scale: 1,
                scaleMobile: 1.00,
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div className='menu-background'>


            <Timer timer={60} isActive={isActive}/>
            {isActive ?
                <Words words={words}/> :
                <div className="menu-aside">
                    <div className="vanta" ref={backgroundRef}/>
                </div>
            }

            <div className="btns-wrapper">
                <Button c buttonAction="Start" text={`${isActive ? "PAUSE" : "START"}`} buttonClass="start-btn"
                        function={toggle}/>
                <Button buttonAction="History" text={`${isActive ? "RECORDING" : "HISTORY"}`}
                        buttonClass={`${isActive ? "record-btn board-btn" : "board-btn"}`}/>
            </div>

            {modal &&
                <Modal
                    toggle={toggle}
                    heading="Choose Difficulty"
                    content={renderDifficuilty}
                />
            }
        </div>

    )
}
