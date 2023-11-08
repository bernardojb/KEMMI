'use client'
import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Spline from './Spline'
import Media from 'react-media'
import { Perf } from 'r3f-perf'
// import { PerformanceMonitor } from '@react-three/drei'

const Experience = () => {
    const [dpr, setDpr] = useState(1.5)

    return (
        <Canvas
            frameloop='always'
            camera={{ position: [-1, -2, 6], fov: '50', }}
            style={{ opacity: '0.75', mixBlendMode: 'hue' }}
            eventPrefix="client"
            shadows={'basic'}
            className='h-full w-full'
        >
            {/* <Perf position='top-right' style={{ marginTop: '100px' }} /> */}
            {/* <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} /> */}
            {/* <Media queries={{ small: "(max-width: 1023px)" }}>
                {matches =>
                    matches.small ?
                        (
                            <>
                                <fog attach="fog" args={['#416B64', 0.01, 10]} />
                                <fog attach="fog" args={['#416B64', 11, 3]} />
                                <group position={[0.7, 0.3, 0.5]} rotation={[-19.1, 24.3, -0.35]} scale={0.62}>
                                    <Spline />
                                </group>
                            </>
                        ) : ( */}
                            <>
                                {/* <fog attach="fog" args={['#416B64', 0.1, 10]} />
                                <fog attach="fog" args={['#416B64', 13, 3]} /> */}
                                {/* <group position={[2.9, 0.6, 0.5]} rotation={[-19.1, 24.3, -0.35]}> */}
                                <group position={[2, 0, 0]} rotation={[0, 0, 0]} scale={0.0075}>
                                    <Spline />
                                </group>
                            </>
                        {/* ) */}
                {/* } */}
            {/* </Media> */}
        </Canvas>
    )
}

export default Experience