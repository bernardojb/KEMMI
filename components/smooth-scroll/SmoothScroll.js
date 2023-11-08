'use client'
import React from 'react'
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const SmoothScroll = ({ children }) => {
    //Scroll
    const scrollRef = React.useRef()
    React.useEffect(() => {
        scrollRef.current = new Lenis({
            duration: 0.6,
            easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false
        })

        scrollRef.current.on("scroll", ScrollTrigger.update)

        const updateFunc = time => {
            scrollRef.current?.raf(time * 1000)
        }

        gsap.ticker.add(updateFunc, false, true)

        return () => {
            gsap.ticker.remove(updateFunc)
            scrollRef.current?.destroy()
        }
    }, [])
    //End scroll
    return (
        <>
            {children}
        </>
    )
}

export default SmoothScroll