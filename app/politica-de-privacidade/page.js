import * as React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Animation from '@/components/animations/Animation';
import { generalData } from '@/data/general-data';
// import OpenAccount from '@/components/buttons/OpenAccount';

const Paragraph = (props) => {
    return (
        <div className=' mb-16 '>
            <p className='content-primary text-lg'>{props.title}</p>
            <p className='content-secondary text-lg'>{props.paragraph1}</p>
            {props.children}
        </div>
    )
}

const Politica = () => {
    return (
        <Animation>
            <section className=' bg-bg-color-0 pt-[292px] pb-28'>
                <div className='container pt-10'>
                    <p className='content-subtitle text-sm mb-6 '>LEGAL</p>
                    <h1 className='content-primary text-2xl mb-6 '>Política de Privacidade</h1>
                    <p className='content-secondary text-xl mb-14 '>A sua privacidade é de extrema importância para nós. Nossa política de privacidade explica como a Kemmi coleta, utiliza e protege as informações pessoais que você nos fornece ao preencher o formulário de cotação de medicamentos especiais em nosso site.</p>
                    <Paragraph
                        title="1. Informações Coletadas"
                        paragraph1="Ao utilizar nosso site e preencher o formulário de cotação, podemos coletar as seguintes informações pessoais:

                        Nome
                        Endereço de e-mail
                        Número de telefone
                        Informações médicas relacionadas aos medicamentos especiais"
                    />
                     <Paragraph
                        title="2. Uso das Informações"
                        paragraph1="As informações coletadas são usadas exclusivamente para:

                        Processar e responder às suas solicitações de cotação.
                        Fornecer informações relevantes sobre nossos produtos e serviços.
                        Cumprir com obrigações legais e regulatórias."
                    />
                     <Paragraph
                        title="3. Segurança das Informações"
                        paragraph1="Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado ou divulgação."
                    />
                     <Paragraph
                        title="4. Compartilhamento de Informações"
                        paragraph1="Não compartilhamos suas informações pessoais com terceiros sem o seu consentimento, a menos que seja necessário para cumprir com obrigações legais."
                    />
                     <Paragraph
                        title="5. Cookies"
                        paragraph1="Utilizamos cookies para melhorar a experiência do usuário. Você pode optar por desativar os cookies em seu navegador."
                    />
                     <Paragraph
                        title="6. Seus Direitos"
                        paragraph1="Você tem o direito de:

                        Acessar e corrigir suas informações pessoais.
                        Solicitar a exclusão de suas informações, quando aplicável.
                        Retirar seu consentimento a qualquer momento."
                    />
                     <Paragraph
                        title="7. Alterações na Política de Privacidade"
                        paragraph1="Reservamo-nos o direito de atualizar nossa política de privacidade periodicamente. As alterações serão refletidas nesta página.

                        Ao utilizar nosso site, você concorda com esta política de privacidade. Se tiver dúvidas ou preocupações, entre em contato conosco pelo e-mail contato@kemmifarma.com
                        
                        Data da última atualização: 21/09/2023
                        
                        Kemmi - Sua confiança é nossa prioridade."
                    />


                    {/* <div className='flex flex-row pt-10 items-center'>
                        <Image className="mr-6 lg:mr-10" src="/assets/main/main-logo-icon.svg" height={50} width={50} />
                        <p className='text-xs text-gray max-w-[260px]'> {generalData.slogan} © {new Date().getFullYear()} {generalData.name}.</p>
                    </div> */}
                </div>
            </section>
        </Animation>
    )
}

export default Politica;
