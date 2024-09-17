'use client'
import { useEffect, useState, useRef } from 'react'
import Script from 'next/script'
import Hero from './Hero'

export default function DotsBG({ className }) {
    const [vantaEffect, setVantaEffect] = useState(null)

    const myRef = useRef(null)
    useEffect(() => {

        if (!vantaEffect && window.VANTA && window.THREE) {
            // console.log(window.VANTA, window.THREE)
            setVantaEffect(window.VANTA.DOTS({
                el: myRef.current,
                THREE: window.THREE,
                showLines: false,
                minHeight: 300,
                minWidth: 300,
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])


    return (
        <>
            <div id='id' className={className} ref={myRef} >
                <Hero />

            </div>
            <Script
                strategy="afterInteractive"
                src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js"
                onLoad={() => {
                    console.log('Vanta.js loaded');
                    if (typeof window !== 'undefined' && window.VANTA && window.THREE && !vantaEffect) {
                        setVantaEffect(window.VANTA.DOTS({
                            el: myRef.current,
                            THREE: window.THREE,
                            mouseControls: true,
                            touchControls: true,
                            gyroControls: false,
                            minHeight: 400.00,

                            scale: 1.00,
                            scaleMobile: 1.00,
                            backgroundColor: 0x0,
                            color: '#a6e3a1',
                            color2: 0xff8820,
                            size: 3,
                            spacing: 35,
                            showLines: false
                        }));
                    }
                }}
            />


        </>
    )
}


