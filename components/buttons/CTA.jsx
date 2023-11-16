import React from 'react'
import DefaultButton from './DefaultButton'

const CTA = () => {
  return (
    <div className='flex flex-col justify-start items-start text-start lg:justify-start lg:text-start lg:flex-row py-[46px] lg:py-14 px-[18px] lg:px-8 bg-gradient-cta rounded-[28px]'>
      <h1 className='content-primary text-md sm:text-lg max-w-[686px] mb-14 lg:mb-[0]'>Preencha o formulário para receber um orçamento atualizado.</h1>
      <div className='m-auto lg:ml-auto'>
        <DefaultButton href="/sobre" text="Solicitar cotação" style="btn-black" icon="brightness-[2000%]" />
      </div>
    </div>
  )
}

export default CTA