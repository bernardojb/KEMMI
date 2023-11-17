'use client'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion"

const ContactAnimation = ({ children, delay }) => {
    return (
        <AnimatePresence mode='popLayout' >
            <motion.div
                initial={{ width: '0vw', height: '0vh' }}
                animate={{ width: '100vw', height: '100vh' }}
                exit={{ width: '0vw', height: '0vh' }}
                transition={{ duration: 0.2, type:"ease-out" }}
                className='bg-placeholder backdrop-blur-2xl fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[999999]'
                animateon
            >
                <motion.div
                    initial={{ opacity: 0  }}
                    animate={{ opacity: 1  }}
                    exit={{ opacity: 0  }}
                    transition={{ delay: 0.3, duration: 0.5, type: "ease-out" }}
                    className='flex justify-center items-center h-full w-full'
                >
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ContactAnimation