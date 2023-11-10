import * as React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import DefaultButton from '@/components/buttons/DefaultButton';

const Teste = () => {
    return (
        <section className=' bg-bg-color-0 min-h-[100vh] flex justify-center items-center'>
            {/* <div className='container relative h-full min-h-[100vh] flex justify-center items-center'>
                <Image className=' z-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src="/assets/images/404.svg" height={520} width={845} alt="404" />
                <div className='z-10 flex justify-center items-center flex-col'>
                <p className='content-subtitle text-sm mb-6'>OPS!</p>
                <h1 className='content-primary text-2xl mb-6'>Página não encontrada.</h1>
                <p className='content-secondary text-xl mb-14'>Parece que esse conteúdo não existe.</p>
                <DefaultButton text="Voltar para Home" icon="brightness-[2000%]" href="/" style="btn-black" />
                </div>
            </div> */}
            <div class="container">
                <div class="row items-center">
                    <div class="-mr-2/12 relative w-7/12 bg-text-primary">
                        <div class="...">1</div>
                    </div>
                    <div class="w-7/12 bg-text-accent">
                        <div class="...">2</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teste