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
                <div className='fixed h-screen w-screen top-0 left-0 z-[9999] backdrop-blur-2xl flex justify-center items-center' >
                    <div className='fixed h-screen w-screen top-0 left-0 bg-placeholder z-[9999] backdrop-blur-2xl flex justify-center items-center cursor-pointer' onClick={() => setToggleModal(false)}></div>
                    <div className='bg-white w-[95vw] lg:w-[80vw] rounded-[28px] z-[99999] p-5 sm:p-10 relative max-h-[90vh]'>
                        <div className='bg-text-primary w-fit h-[38px] rounded-full flex items-center px-[22px] absolute right-8 cursor-pointer ' onClick={() => setToggleModal(false)}>
                            <Image src="/assets/icons/general/x.svg" height="24" width="24" alt='' className='brightness-[2000%]' />
                        </div>
                        <h1 className='content-primary text-base lg:text-lg mb-8'>Lenvima 10mg</h1>
                        <div className='overflow-y-auto max-h-[75vh]'>
                            <div className='bg-placeholder h-[300px] mb-6 rounded-[28px]'></div>
                            <h1 className='content-primary text-lg lg:text-2xl mb-14'>Lenvima 10mg</h1>
                            <h1 className='content-primary text-base lg:text-lg mb-6'>Descrição</h1>
                            <p className='content-secondary text-base lg:text-lg mb-14'>Lenvima é um inibidor da atividade da tirosina-quinase, responsável pelo crescimento das células cancerígenas. Indicado para o tratamento de um tipo de câncer na tireoide avançado, progressivo ou metastático, que não obteve resposta com outras terapias.</p>
                            <div className='flex w-full justify-end'>
                                <DefaultButton text="Solicitar cotação" href="/contato" style="btn-black" icon="brightness-[2000%]" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Carrousel