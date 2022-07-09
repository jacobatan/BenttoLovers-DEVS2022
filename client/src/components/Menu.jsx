import React, { useState, useEffect, useRef } from 'react'
import TRUNK from 'vanta/dist/vanta.trunk.min'
import * as THREE from 'three'
import * as p5 from 'p5'
import Button from './Button'
import Timer from './Timer'
import Words from './Words'

export default function Menu() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const backgroundRef = useRef(null);
    const[isActive, setIsActive] = useState(false);
    const words = ["Octagon ","Papa John", "Walk along", "drop", "PEEDHA"];
    
    function startGame() {
        setIsActive(!isActive);
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
        <div className='menu-background' >

        <Timer timer={3} isActive={startGame}/>
            {isActive ? 
                <Words words={words}/>:
                <div className="menu-aside" > 
                    <div className="vanta" ref={backgroundRef}/>
                </div> 
            }
            
            <Button buttonAction="Start" text={`${isActive ? "PAUSE" : "START"}`} buttonClass="start-btn" function={startGame}/>
            <Button buttonAction="History" text={`${isActive?"RECORDING" : "HISTORY"}`} buttonClass={`${isActive ? "record-btn board-btn" : "board-btn"}`}/>     
        </div>   
        
    )
}
