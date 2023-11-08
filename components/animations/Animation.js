'use client'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion"

const Animation = ({ children, delay }) => {
    return (
        <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.65, delay: delay }}
                >
                    {children}
                </motion.div>
        </AnimatePresence>
    )
}

export default Animation