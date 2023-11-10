import React from 'react'
import DefaultButton from './DefaultButton'

const CTA = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-start lg:flex-row py-14 px-8 bg-gradient-cta rounded-[28px]'>
        <h1 className='content-primary text-md sm:text-lg max-w-[686px] mb-6 lg:mb-0'>Preencha o formulário para receber um orçamento atualizado.</h1>
        <div className='lg:ml-auto'>
        <DefaultButton href="/sobre" text="Solicitar cotação" style="btn-black" icon="brightness-[2000%]"/>
        </div>
    </div>
  )
}

export default CTA