"use client"
import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const AccordionCard = ({ i, expanded, setImage, setExpanded, children, ...props }) => {
    const isOpen = i === expanded
    return (
        <div className={`${props.padding}`}>
            <div>
                <motion.header
                    initial={false}
                    onClick={() => {
                        setImage(i)
                        setExpanded(isOpen ? false : i)
                    }
                    }
                    className="cursor-pointer flex flex-row items-center group w-fit"
                >
                    <div className={` px-[10px] py-2 md:py-3 md:px-[14px] rounded-full h-fit flex justify-center items-center mr-2 md:mr-5 w-fit mb-3 md:mb-0 transition-all ease-out duration-200 ${isOpen ? "bg-text-primary" : "bg-white"}`}>
                        <p className={`font-monument text-[10px] md:text-sm leading-[100%] transition-all ease-out duration-200 ${isOpen ? "text-white" : "text-text-secondary"} pt-[4px]`}>
                            {props.number}
                        </p>
                    </div>
                    <h1 className={`font-monument text-xl md:text-2xl hover:transition-colors hover:duration-500 duration-500 transition-colors ease-out group-hover:text-text-primary ${isOpen ? "text-text-primary" : "text-text-secondary"}`}>{props.title}</h1>
                </motion.header>
                <AnimatePresence>
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
                            className=" md:ml-[82px]"
                        >
                            <motion.div
                                variants={{ collapsed: { scale: 1 }, open: { scale: 1 } }}
                                transition={{ duration: 0.4 }}
                                className="content-placeholder"
                            >
                                <p className='font-neue text-lg md:text-xl text-text-secondary pt-6 pb-11 transition-all ease-out duration-200'>{props.text}</p>
                            </motion.div>
                            <div className={`rounded-[28px] h-[350px] md:h-[122px] bg-center bg-cover ${props.image}`}>
                            </div>
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
        text: <span><Link href="/#contact-form" className="underline text-text-accent hover:text-text-accent-hover ease-out duration-500 group-hover:transition-all group-hover:ease-out group-hover:duration-500">Preencha o formulário</Link> para receber uma cotação atualizada de seus medicamentos.</span>,
        image: "bg-request-image-m md:bg-request-image",
        padding: "pb-14"
    },
    {
        id: 2,
        number: "02.",
        title: "Aprovação",
        text: "Entraremos em contato com você após a aprovação do orçamento para organizar as informações para entrega do medicamento.",
        image: "bg-approval-image-m md:bg-approval-image",
        padding: "pb-14"
    },
    {
        id: 3,
        number: "03.",
        title: "Envio",
        text: "Finalização do processo de importação e envio dos medicamentos. Entraremos em contato para te manter atualizado sobre o status de seu pedido.",
        image: "bg-delivery-image-m md:bg-delivery-image",
        padding: ""
    },
]

const Accordion = () => {
    const [expanded, setExpanded] = useState(0)
    const [image, setImage] = useState(0)

    return (
        <>
            {accordionData.map(i => (
                <AccordionCard image={i.image} padding={i.padding} key={i.id} number={i.number} title={i.title} text={i.text} i={i.id} expanded={expanded} setExpanded={setExpanded} setImage={setImage}></AccordionCard>
            ))}
        </>
    )

}

export default Accordion