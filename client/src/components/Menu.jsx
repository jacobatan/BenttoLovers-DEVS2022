import React, { useState, useEffect, useRef } from 'react'
import TRUNK from 'vanta/dist/vanta.trunk.min'
import * as THREE from 'three'
import * as p5 from 'p5'

export default function Menu() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const backgroundRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(TRUNK({
                el: backgroundRef.current,
                p5: p5,
                THREE: THREE,
                color: "#d42457", 
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 400.00,
                minWidth: 400.00,
                scale: 1.00,
                scaleMobile: 1.00, 
                xOffset: -0.27
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]) 

    return (
        <div className='menu-background'ref={backgroundRef} />  
        
    )
}
