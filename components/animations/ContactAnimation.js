'use client'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion"

const ContactAnimation = ({ children, delay }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ width: '100vw', height: '0vh', opacity: 0, }}
                animate={{ width: '100vw', height: '100vh', opacity: 1 }}
                exit={{ width: '0vw', height: '0vh', opacity: 0 }}
                transition={{ duration: 0.3, type: "ease-out" }}
                className='bg-placeholder backdrop-blur-2xl fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[999999]'
                animateon
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, }}
                    transition={{ delay: 0.4, duration: 0.5, type: "ease-out" }}
                    className='flex justify-center items-center h-full w-full'
                >
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ContactAnimation