'use client'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion"

const Animation = ({ children, delay, className }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.65, delay: 0, ease: 'easeOut' }}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default Animation