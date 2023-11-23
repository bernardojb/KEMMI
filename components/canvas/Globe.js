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
            context: { antialias: true },
            devicePixelRatio: 0.5,
            width: 300 * 2,
            height: 300 * 2,
            phi: 0,
            theta: 0.2,
            dark: 0,
            diffuse: 3,
            mapSamples: 7000,
            mapBrightness: 2,
            baseColor: [0.95, 0.95, 0.95],
            markerColor: [0, 1, 0.8],
            glowColor: [1, 1, 1],
            opacity: 0.9,
            scale: width < 750 ? 0.7 : 1,
            markers: [
                // longitude latitude
                { location: [40.75030307139222, -73.97266663185377], size: 0.05 }, //PFIZER NY,
                { location: [-23.629269814654965, -46.70806227116496], size: 0.05 }, //PFIZER BRASIL
                { location: [40.644611312393806, -74.64021687239416], size: 0.05 }, //KYOWA KIRIN
                { location: [48.7245758181629, -74.37946693248628], size: 0.05 }, //BRYSTOL
                { location: [33.12537009482279, -95.23305487283119], size: 0.05 }, //ASTRAZENECA
                { location: [-23.597333228111566, -46.86411201183329], size: 0.05 }, //ASTRAZENECA BRASIL
                { location: [43.606758512694896, -79.7527824927525], size: 0.05 }, //roche
                { location: [43.606758512694896, -79.7527824927525], size: 0.05 }, //roche
                { location: [45.32651171528461, 14.444021864455495], size: 0.05 }, //roche
                { location: [21.555842178164095, 39.16580415586747], size: 0.05 }, //roche
                { location: [24.471592072971443, 54.346498385696485], size: 0.05 }, //roche
                { location: [10.774235974345606, 106.7049042559173], size: 0.05 }, //roche

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


