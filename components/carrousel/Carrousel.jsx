'use client'
import React, { useState } from 'react'
// import { investmentsData } from '@/data/investimentos-data'
// import InvestmentCard from './InvestmentCard'

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProductCard from '../cards/ProductCard';
import DefaultButton from '../buttons/DefaultButton';
import Image from 'next/image';
import ContactAnimation from '../animations/ContactAnimation';

const Carrousel = (props) => {

    const [toggleModal, setToggleModal] = useState(false)

    return (
        <>
            <Swiper
                spaceBetween={16}
                slidesPerView={'auto'}
                loop={false}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    420: {
                        slidesPerView: 1,
                    },
                    540: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1104: {
                        slidesPerView: 4,
                    },
                }}
                className="card-slider-4-columns !py-5 !pb-12 !overflow-visible"
            >
                {/* {investmentsData.map((item) => (
                    <SwiperSlide className="cursor-grab active:cursor-grabbing" key={item.id}>
                        <InvestmentCard
                            // key={item.id}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                            tagBg={item.tagBg}
                            tagColor={item.tagColor}
                            tagText={item.tagText}
                            className="mb-10"
                        />
                    </SwiperSlide>
                ))} */}
                <SwiperSlide className="cursor-grab active:cursor-grabbing h-full">
                    <ProductCard title="Lonsurf 4mg/ml" onClick={() => setToggleModal(true)} />
                </SwiperSlide>
                <SwiperSlide className="cursor-grab active:cursor-grabbing h-full">
                    <ProductCard title="Lonsurf 4mg/ml" onClick={() => setToggleModal(true)} />
                </SwiperSlide>
                <SwiperSlide className="cursor-grab active:cursor-grabbing h-full">
                    <ProductCard title="Lonsurf 4mg/ml" onClick={() => setToggleModal(true)} />
                </SwiperSlide>
                <SwiperSlide className="cursor-grab active:cursor-grabbing h-full">
                    <ProductCard title="Lonsurf 4mg/ml" onClick={() => setToggleModal(true)} />
                </SwiperSlide>
                <SwiperSlide className="cursor-grab active:cursor-grabbing h-full">
                    <ProductCard title="Lonsurf 4mg/ml" onClick={() => setToggleModal(true)} />
                </SwiperSlide>
                <SwiperSlide className="cursor-grab active:cursor-grabbing h-full">
                    <ProductCard title="Lonsurf 4mg/ml" onClick={() => setToggleModal(true)} />
                </SwiperSlide>
                <SwiperSlide className="cursor-grab active:cursor-grabbing h-full">
                    <ProductCard title="Lonsurf 4mg/ml" onClick={() => setToggleModal(true)} />
                </SwiperSlide>
                <SwiperSlide className="cursor-grab active:cursor-grabbing h-full">
                    <ProductCard title="Lonsurf 4mg/ml" onClick={() => setToggleModal(true)} />
                </SwiperSlide>
                <SwiperSlide className="cursor-grab active:cursor-grabbing h-full">
                    <ProductCard title="Lonsurf 4mg/ml" onClick={() => setToggleModal(true)} />
                </SwiperSlide>
                <SwiperSlide className="cursor-grab active:cursor-grabbing h-full">
                    <ProductCard title="Lonsurf 4mg/ml" onClick={() => setToggleModal(true)} />
                </SwiperSlide>
                <SwiperSlide className="cursor-grab active:cursor-grabbing h-full">
                    <ProductCard title="Lonsurf 4mg/ml" onClick={() => setToggleModal(true)} />
                </SwiperSlide>
                <SwiperSlide className="cursor-grab active:cursor-grabbing h-full">
                    <ProductCard title="Lonsurf 4mg/ml" onClick={() => setToggleModal(true)} />
                </SwiperSlide>
                <SwiperSlide className="cursor-grab active:cursor-grabbing h-full">
                    <ProductCard title="Lonsurf 4mg/ml" onClick={() => setToggleModal(true)} />
                </SwiperSlide>
            </Swiper>
            {toggleModal && (
                <ContactAnimation>
                    {/* <div className='fixed h-screen w-screen top-0 left-0 z-[9999] backdrop-blur-2xl flex justify-center items-center' >
                        
                    </div> */}
                    <div className='fixed h-screen w-screen top-0 left-0 bg-placeholder z-[9999] flex justify-center items-center cursor-pointer' onClick={() => setToggleModal(false)}></div>

                    <div className='bg-white overflow-y-auto max-w-[956px] w-full rounded-[28px] z-[99999] relative h-full max-h-[90vh] mx-5'>

                        <div className='mx-5 my-5 bg-text-primary w-fit h-[38px] rounded-full flex items-center px-[22px] ml-auto cursor-pointer group hover:bg-gray transition-all duration-200 ease-out' onClick={() => setToggleModal(false)}>
                            <Image src="/assets/icons/general/x.svg" height="24" width="24" alt='Close Icon' className='brightness-[2000%] transition-all duration-200 ease-out group-hover:rotate-[180deg]' />
                        </div>

                        <div className='px-5 pb-5'>
                            <div className='bg-[#e6eaed] h-[300px] mb-6 rounded-[28px] flex justify-center items-center'>
                                <Image src="/assets/images/medicine-box-01.png" height={300} width={425} alt="" className='rounded-[28px]' />
                            </div>
                            <h1 className='content-primary text-lg lg:text-2xl mb-14'>Lenvima 10mg</h1>
                            <h1 className='content-primary text-base lg:text-lg mb-6'>Descrição</h1>
                            <p className='content-secondary text-base lg:text-lg mb-14'>Lenvima é um inibidor da atividade da tirosina-quinase, responsável pelo crescimento das células cancerígenas. Indicado para o tratamento de um tipo de câncer na tireoide avançado, progressivo ou metastático, que não obteve resposta com outras terapias.</p>

                            <div className='flex w-full justify-end mt-auto'>
                                <DefaultButton text="Solicitar cotação" href="/contato" style="btn-black" icon="brightness-[2000%]" />
                            </div>
                        </div>
                    </div>
                </ContactAnimation>
            )}
        </>
    )
}

export default Carrousel