'use client'
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import Media from 'react-media';
import Stats from "stats.js";

let globe

export default function Globe() {
    const canvasRef = useRef();

    const stats = new Stats()
    stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom)

    useEffect(() => {
        let width = 0;
        const onResize = () => {
            canvasRef.current && (width = canvasRef.current.offsetWidth)
        }
        window.addEventListener('resize', onResize)

        onResize()

        let phi = 0;
        globe = createGlobe(canvasRef.current, {
            context: { antialias: false },
            devicePixelRatio: 0.95,
            width: 600* 2 ,
            height: 600* 2 ,
            phi: 0,
            theta: 0.2,
            dark: 0,
            diffuse: 1.5,
            mapSamples: 9500,
            mapBrightness: 2,
            baseColor: [0.95, 0.95, 0.95],
            markerColor: [0, 1, 0.8],
            glowColor: [1, 1, 1],
            opacity: 0.9,
            scale: width < 750 ? 0.7 : 1,
            markers: [
                // longitude latitude
                // { location: [40.75, -73.97], size: 0.04 }, //PFIZER NY,
                // { location: [-23.62, -46.70], size: 0.05 }, //PFIZER BRASIL
                // { location: [40.64, -74.64], size: 0.04 }, //KYOWA KIRIN
                // { location: [48.72, -74.37], size: 0.04 }, //BRYSTOL
                // { location: [33.12, -95.23], size: 0.04 }, //ASTRAZENECA
                // { location: [-23.59, -46.86], size: 0.05 }, //ASTRAZENECA BRASIL
                // { location: [43.60, -79.75], size: 0.04 }, //roche
                // { location: [43.60, -79.75], size: 0.05 }, //roche
                // { location: [45.32, 14.44], size: 0.1 }, //roche
                // { location: [21.55, 39.16], size: 0.08 }, //roche
                // { location: [24.47, 54.34], size: 0.05 }, //roche
                // { location: [10.77, 106.70], size: 0.08 }, //roche

            ],
            scale: width < 750 ? 0.6 : 1,
            offset: [width < 750 ? -400 : 500, 0],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.003;
                stats.update()
            }
        });
        return () => {
            globe.destroy();
        };
    }, []);



    return (
        <div className="relative">
            <canvas
                ref={canvasRef}
                style={{ aspectRatio: 1 }}
                className="w-[100vw] lg:w-[1350px] h-[1350px] max-w-full"
            />
        </div>
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


