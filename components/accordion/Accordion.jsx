"use client"
import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const AccordionCard = ({ i, expanded, setImage, setExpanded, children, ...props }) => {
    const isOpen = i === expanded
    return (
        <div className={`flex flex-row flex-nowrap ${props.padding}`}>
            <div className="bg-text-primary py-3 px-[14px] rounded-full h-fit flex justify-center items-center mr-5 ">
                <p className="font-monument text-white leading-[100%]">
                    {props.number}
                </p>
            </div>
            <div>
                <motion.header
                    initial={false}
                    onClick={() => {
                        setImage(i)
                        setExpanded(isOpen ? false : i)
                    }
                    }
                    className="w-full cursor-pointer"
                >
                    <h1 className={`font-monument text-2xl hover:transition-colors hover:duration-500 duration-500 transition-colors ease-out ${isOpen ? "text-text-primary" : "text-text-secondary"}`}>{props.title}</h1>
                </motion.header>
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.section
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 }
                            }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                            <motion.div
                                variants={{ collapsed: { scale: 1 }, open: { scale: 1 } }}
                                transition={{ duration: 0.4 }}
                                className="content-placeholder"
                            >
                                <p className='font-neue text-xl text-text-secondary pt-6 pb-11'>{props.text}</p>
                            </motion.div>
                            <div className="rounded-[28px] h-[122px] bg-placeholder"></div>
                        </motion.section>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
const accordionData = [
    {
        id: 0,
        number: "01.",
        title: "Solicitação",
        text: "Preencha o formulário para receber uma cotação atualizada de seus medicamentos.",
        padding:"pb-14"
    },
    {
        id: 2,
        number: "02.",
        title: "Aprovação",
        text: "Preencha o formulário para receber uma cotação atualizada de seus medicamentos.",
        padding:"pb-14"
    },
    {
        id: 3,
        number: "03.",
        title: "Envio",
        text: "Preencha o formulário para receber uma cotação atualizada de seus medicamentos.",
        padding:""
    },
]

const Accordion = () => {
    const [expanded, setExpanded] = useState(0)
    const [image, setImage] = useState(0)

    return (
        <>
            {accordionData.map(i => (
                <AccordionCard padding={i.padding} key={i.id} number={i.number} title={i.title} text={i.text} i={i.id} expanded={expanded} setExpanded={setExpanded} setImage={setImage}></AccordionCard>
            ))}
        </>
    )

}

export default Accordion