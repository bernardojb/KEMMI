// import { BtnChev } from '@/components/buttons/BtnChev'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import DefaultButton from '@/components/buttons/DefaultButton'

const notFound = () => {
    return (
        <section className=' bg-bg-color-0 min-h-[90vh]'>
            <div className='container relative h-full min-h-[90vh] flex justify-center items-center'>
                <Image className=' z-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src="/assets/images/404.svg" height={520} width={845} alt="404" />
                <div className='z-10 flex justify-center items-center flex-col'>
                    <p className='content-subtitle text-sm mb-6'>OPS!</p>
                    <h1 className='content-primary text-2xl mb-6'>Página não encontrada.</h1>
                    <p className='content-secondary text-xl mb-14'>Parece que esse conteúdo não existe.</p>
                    <DefaultButton text="Voltar para Home" icon="brightness-[2000%]" href="/" style="btn-black" />
                </div>
            </div>
        </section>
    )
}

export default notFound