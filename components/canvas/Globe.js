'use client'
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

// https://github.com/shuding/cobe

let globe

export default function Globe() {
    const canvasRef = useRef();

    useEffect(() => {
        const screen = window.innerWidth

        console.log(canvasRef)
        console.log("screen", screen)
    }, [])

    useEffect(() => {
        let phi = 0;

        globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 0.75,
            width:  950,
            height: 950,
            phi: 0,
            theta: 0,
            dark: 0,
            diffuse: 1.2,
            mapSamples: 10000,
            mapBrightness: 6,
            baseColor: [1, 1, 1],
            markerColor: [0.25, 1, 0.9],
            glowColor: [1, 1, 1],
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.03 }
            ],
            offset: [600, 0],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.003;
            }
        });

        return () => {
            // globe.destroy();
        };
    }, []);

    return (
        <>
            <button className="h-20 w-20 bg-accent" onClick={() => globe.toggle()} />
            <canvas
                ref={canvasRef}
                style={{ aspectRatio: 1 }}
                className="w-[1350px] h-[1350px] max-w-full"
            />
        </>
    );
}

// export default function Globe() {
//     const canvasRef = useRef();

//     useEffect(()=>{
//         const screen = window.innerWidth

//         console.log(canvasRef)
//         console.log("screen", screen)
//     },[])

//     useEffect(() => {
//         let phi = 0;

//         const globe = createGlobe(canvasRef.current, {
//             devicePixelRatio: 2,
//             width: 850 * 2,
//             height: 850 * 2,
//             phi: 0,
//             theta: 0,
//             dark: 0,
//             diffuse: 1.2,
//             mapSamples: 16000,
//             mapBrightness: 6,
//             baseColor: [1, 1, 1],
//             markerColor: [0.25, 1, 0.9],
//             glowColor: [1, 1, 1],
//             markers: [
//                 // longitude latitude
//                 { location: [37.7595, -122.4367], size: 0.03 },
//                 { location: [40.7128, -74.006], size: 0.03 }
//             ],
//             offset: [350 , 0 ],
//             onRender: (state) => {
//                 // Called on every animation frame.
//                 // `state` will be an empty object, return updated params.
//                 state.phi = phi;
//                 phi += 0.003;
//             }
//         });

//         return () => {
//             globe.destroy();
//         };
//     }, []);

//     return (
//         <canvas
//             ref={canvasRef}
//             style={{ aspectRatio: 1 }}
//             className="w-[850px] h-[850px] max-w-full"
//         />
//     );
// }


