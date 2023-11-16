'use client'
import * as React from 'react';
// import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/contact-form/ContactForm';
import DefaultButton from '@/components/buttons/DefaultButton';
import Accordion from '@/components/accordion/Accordion';
import CTA from '@/components/buttons/CTA';
import ProductCard from '@/components/cards/ProductCard';
import Experience from '@/components/canvas/Experience';
import { generalData } from '@/data/general-data';
import ChevronPill from '@/components/buttons/ChevronPill';
import Carrousel from '@/components/carrousel/Carrousel';
import Globe from '@/components/canvas/Globe';
import Animation from '@/components/animations/Animation';
import { LoadingScreen } from '@/components/loading-screen/LoadingScreen';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  // const [start, setStart] = useState(false);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <Animation>
      {/* INTRO */}
      {/* <LoadingScreen started={start} onStarted={() => {
        setStart(true)
        console.log('trigger')
      }
      } /> */}
      <div className='relative bg-bg-color-0 '>
        <section className='relative min-h-screen w-full  z-10'>
          <div className='container pt-[20px]'>
            <div className='grid grid-cols-16 min-h-[768px] h-[100vh] gap-3'>
              <div className=' col-span-full lg:col-span-10 flex flex-col h-full justify-center'>
                <p className=' text-xs sm:text-sm content-subtitle pb-6'>@KEMMI.FARMA</p>
                <h1 className=' content-primary text-xl sm:text-2xl pb-6'>Simplificamos a importação de medicamentos especiais.</h1>
                <p className='content-secondary text-base sm:text-lg pb-14'>Somos uma empresa especializada que ajuda você a importar medicamentos especiais dos Estados Unidos e Europa.</p>
                <div className='flex flex-row flex-wrap items-center'>
                  <div className='mb-3'>
                    <DefaultButton href="/contato" text="Solicitar cotação" style="btn-black mr-3" icon="brightness-[2000%]" />
                  </div>
                  <div className='mb-3'>
                    <DefaultButton href="/sobre" text="Como importamos" style="btn-gray" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='absolute w-screen h-full top-0 right-0 flex justify-end items-end z-0' ref={ref}>
          {inView ? ( <Globe /> ) : (null)}
        </div>

        <section className=' pb-24 z-10'>
          <div className='container'>
            <div className='grid grid-cols-16'>
              <div className='col-span-full lg:col-span-8 h-full bg-gradient-radial rounded-[28px] p-8 relative max-w-[610px]'>
                <h1 className='content-primary text-base sm:text-lg pb-3'>Acesso global.</h1>
                <p className='content-secondary text-base sm:text-lg max-w-[537px] pb-8'>Oferecemos fácil acesso  aos melhores medicamentos e laboratórios do mundo.</p>
                <div className='grid grid-cols-8 gap-3 pb-12 sm:pb-0'>
                  <div className='col-span-4 sm:col-span-3'>
                    <Image src="/assets/main/client-01.svg" height={42} width={154} alt='Pfizer Logo' />
                  </div>
                  <div className='col-span-4 sm:col-span-3'>
                    <Image src="/assets/main/client-02.svg" height={42} width={154} alt='Kyowa Kirin Logo' />
                  </div>
                  <div className='col-span-4 sm:col-span-3 sm:col-start-3'>
                    <Image src="/assets/main/client-03.svg" height={42} width={154} alt='Bristol Myers Logo' />
                  </div>
                  <div className='col-span-4 sm:col-span-3'>
                    <Image src="/assets/main/client-04.svg" height={42} width={154} alt='AstraZeneca Logo' />
                  </div>
                  <div className='col-span-4 sm:col-span-3'>
                    <Image src="/assets/main/client-05.svg" height={42} width={154} alt='Roche Logo' />
                  </div>
                  <div className='col-span-4 sm:col-span-3'>
                    <Image src="/assets/main/client-06.svg" height={42} width={154} alt='Janssen Logo' />
                  </div>
                </div>
                <div className='absolute right-8 bottom-8'>
                  <ChevronPill href="/sobre" />
                </div>
              </div>
            </div>
          </div>
        </section>



      </div>

      <section className='bg-bg-color-0 pb-40'>
        <div className='container'>
          <div className='pb-14 w-full lg:w-13/16 '>
            <p className='content-subtitle text-xs sm:text-sm pb-6'>ETAPAS DA IMPORTAÇÃO</p>
            <h1 className='content-primary text-xl lg:text-2xl'>Oferecemos um processo simplificado para importação dos medicamentos.</h1>
          </div>
          <div className='grid grid-cols-16'>
            <div className='col-span-full lg:col-span-11 lg:col-start-6 pb-6'>
              <div className='px-[18px] md:px-[76px] md:py-20 py-[46px] bg-gradient-radial rounded-[28px]'>
                <Accordion />
              </div>
            </div>
            <div className='lg:col-start-3 w-full col-span-full '>
              <CTA />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-bg-color-0'>
        <div className=' rounded-[28px] sm:rounded-[60px] bg-white mx-3'>

          <div className='container pb-32'>
            <div className=' pt-[13px] sm:pt-40 grid grid-cols-16 relative h-[1000px] sm:h-[1160px]'>

              <div className='col-span-full sm:col-span-12 rounded-[28px] sm:rounded-[48px] bg-card-bg px-[18px] py-14 sm:px-20 sm:py-20 h-fit sm:mt-[90px] z-10 mb-3 sm:mb-0 backdrop-blur-[30px]'>
                <p className=' text-xs sm:text-sm content-subtitle pb-6'>QUEM SOMOS</p>
                <h1 className=' content-primary text-lg lg:text-2xl pb-6 break-words'>Somos uma empresa que ajuda você a importar medicamentos especiais.</h1>
                <p className='content-secondary text-base lg:text-lg pb-14'>Oferecemos um atendimento ágil e cuidamos da sua saúde através da importação inteligente.</p>
                <div className='pb-[90px] w-fit '>
                  <DefaultButton href="/sobre" text="Sobre a Kemmi" style="btn-black" icon="brightness-[2000%]" />
                </div>
                <div className='flex flex-row items-center'>
                  <Image src="/assets/images/anvisa.svg" width={39} height={34} alt="Anvisa Logo" className='mr-3' />
                  <p className='max-w-[350px] content-secondary text-base'>Seguimos todas regulamentações e exigências da ANVISA.</p>
                </div>
              </div>

              <div className='
              ml-auto col-span-full lg:col-span-7 flex 
              absolute 
              top-[45%] sm:top-[160px] 
              right-0 sm:right-0 
              min-h-[580px] sm:h-[1000px] 
              w-full sm:w-[40vw] sm:max-w-[520px] 
              rounded-[28px] sm:rounded-[48px] 
              z-0 
              bg-about-image bg-cover bg-bottom'></div>
            </div>

          </div>

          <div className='container pb-32'>
            <p className=' text-xs sm:text-sm content-subtitle pb-6'>PRODUTOS</p>
            <h1 className=' content-primary text-xl lg:text-2xl pb-12'>Medicamentos mais solicitados</h1>
            <div className='overflow-x-hidden'>
              <Carrousel />
            </div>
          </div>

          <div className='container pb-32'>
            <div className='grid grid-cols-16 '>
              <div className='col-span-full lg:col-span-9 mb-32 lg:mb-3'>
                <h1 className=' content-primary text-xl lg:text-2xl pb-6'>Portal de importação de medicamentos não registrados no Brasil.</h1>
                <p className='content-secondary text-base sm:text-lg pb-14'>Contamos com mais de 20 anos de experiência no mercado hospitalar e no segmento de alta complexidade.</p>
                <div className='w-fit'>
                  <DefaultButton href="/sobre" text="Nossa história" style="btn-black" icon="brightness-[2000%]" />
                </div>
              </div>

              <div className='mb-3 col-span-full md:col-start-10 lg:col-span-5 lg:col-start-12 bg-gradient-20 rounded-[28px] px-[18px] py-14 lg:px-8 lg:py-[89px] flex justify-center items-center flex-col'>
                <Image src="/assets/main/20.svg" width="252" height="92" alt='20 anos de experiência no mercado farmacêutico' className=' mb-6' />
                <p className='content-secondary text-md lg:text-lg text-center max-w-[300px] '>Anos de experiência no mercado farmacêutico.</p>
              </div>

              <div className='mb-3 col-span-full lg:col-span-5 flex justify-center items-center lg:items-start flex-col order-2 lg:order-1'>
                <p className='content-secondary text-base sm:text-lg mb-[14px]'>Acompanhe a Kemmi</p>
                <div className='flex flex-row'>
                  {generalData.darkLinks.map((i) => (
                    <a target='_blank' href={i.href} className='mr-4 hover:brightness-[300%] ease-out duration-500 hover:transition-all hover:ease-out hover:duration-500'>
                      <Image
                        src={i.image}
                        alt={`${i.name} Social Media Icon`}
                        width={24}
                        height={24}
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className='mb-14 col-span-full lg:col-start-7 order-1 lg:order-2'>
                <div className='h-[426px] sm:h-[146px] rounded-[28px] bg-about-image-2-m sm:bg-about-image-2 bg-cover'>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </Animation>
  )
}

export default Home
