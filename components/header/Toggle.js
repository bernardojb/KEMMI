import * as React from "react";
import { motion } from "framer-motion";

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="2"
        stroke="#fff"
        strokeLinecap="round"
        {...props}
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
            height: 'auto',
            cursor: 'pointer'
        }}>
        <svg width="40" height="23" viewBox="0 0 23 23">
            <Path
                strokeLinecap="square"
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                strokeLinecap="square"
                d="M 10 9.423 L 30 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                strokeLinecap="square"
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);

export default MenuToggle
