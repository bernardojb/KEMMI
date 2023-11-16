import * as React from "react";
import { motion } from "framer-motion";

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="2"
        {...props} 
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}       
    />
);

const MenuToggle = ({ toggle }) => (
    <button onClick={toggle}
        className='remove-effects'
        style={{
            backgroundColor: 'transparent',
            border: "none",
            padding: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            cursor: 'pointer',
        }}>
        <svg width="47" height="26" viewBox="0 0 47 26">
            <Path
            className="group-hover:stroke-text-primary transition-all 
               ease-out 
               duration-500
               group-hover:transition-all 
               group-hover:ease-out 
               group-hover:duration-500"
            style={{
                stroke:''
            }}
                strokeLinecap="square"
                variants={{
                    closed: { d: "M7 18H34M21.5 12.5H39M10.5 7H34", stroke:"white", opacity: 1 },
                    open: {d: "M7 18H2M3 12.5H39M1 7H1", stroke:"transparent", opacity: 0 }
                }}                
            />
            <Path
            className="group-hover:stroke-text-primary transition-all 
               ease-out 
               duration-500
               group-hover:transition-all 
               group-hover:ease-out 
               group-hover:duration-500"
            style={{
                stroke:''
            }}
                strokeLinecap="square"                
                variants={{
                    closed: { d: "M1 20L3 50", stroke:'transparent', opacity: 0 },
                    open: { d:"M16 20L31 5", stroke:"white", opacity: 1 }
                }}                  
            />
            <Path
            className="group-hover:stroke-text-primary transition-all 
               ease-out 
               duration-500
               group-hover:transition-all 
               group-hover:ease-out 
               group-hover:duration-500"
            style={{
                stroke:''
            }}
                strokeLinecap="square"
                variants={{
                    closed: { d: "M1 2L1 5", stroke:"transparent", opacity: 0 },
                    open: { d: "M31 20L16 5", stroke:"white", opacity: 1 }
                }}
                
            />
        </svg>
    </button>
);

export default MenuToggle