import React, { useState, useEffect, useRef } from 'react'
import TRUNK from 'vanta/dist/vanta.trunk.min'
import * as THREE from 'three'
import * as p5 from 'p5'
import Button from './Button'

export default function Menu() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const backgroundRef = useRef(null)

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
                minHeight: 400.00,
                minWidth: 400.00,
                scale: 1.00,
                scaleMobile: 1.00, 
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]) 

    return (
        <div className='menu-background' >
            <div className="menu-aside" ref={backgroundRef}/>
            <Button buttonAction="Start" text="START" buttonClass="start-btn"/>
            <Button buttonAction="Leaderboard" text="LEADERBOARD" buttonClass="board-btn"/>
        </div>   
        
    )
}
