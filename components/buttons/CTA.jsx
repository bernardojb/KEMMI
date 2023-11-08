import React from 'react'
import DefaultButton from './DefaultButton'

const CTA = () => {
  return (
    <div className='flex flex-row py-14 px-8 bg-white rounded-[28px]'>
        <h1 className='content-primary text-lg max-w-[686px]'>Preencha o formulário para receber um orçamento atualizado.</h1>
        <DefaultButton href="/" text="Solicitar cotação" style="btn-black" icon="brightness-[2000%]"/>
    </div>
  )
}

export default CTA