'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import MenuToggle from './Toggle'
import Link from 'next/link'
import { generalData } from '@/data/general-data'
import { headerData } from '@/data/header-data'


export default function Header() {

  const [toggle, setToggle] = useState(false)
  const [display, setDisplay] = useState(false)
  const pathname = usePathname()

  //anim
  const openNav = {
    open: {
      height: '100dvh',
      backgroundColor: '#ffffff',
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 1
      }
    },
    closed: {
      height: '80px',
      backgroundColor: '#ffffff00',
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.6,
        delay:0.1
      }
    }
  }

  const openLinks = {
    open: {
      opacity: 1,
      transition: {
        // type: 'spring',
        duration: 0.5,
        delay: 0.3
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0
      }
    }
  }

  const openSocial = {
    open: {
      opacity: 1,
      transition: {
        // type: 'spring',
        duration: 0.5,
        delay: 0.6
      },
    },
    closed: {
      opacity: 0,
      transition: {
        // type: 'spring',
        // bounce: 0.2,
        duration: 0.2,
        delay: 0
      }
    }
  }

  return (
    <AnimatePresence mode='wait'  >
      <motion.div
        className={`z-[999] w-screen fixed flex flex-col min-h-[80px]`}
        animate={toggle ? "open" : "closed"}
        variants={openNav}
        initial={false}
      >
        <div className='flex flex-row container'>
          <div className='pr-12 py-2 mt-3 flex justify-center'>
            <a href='/' className='w-[153px] h-[42px]'>
              <Image
                src="/assets/main/main-logo.svg"
                alt="Hokup Logo"
                width={153}
                height={42}
                className='w-full h-full'
                priority
              />
            </a>
          </div>

          <div className={`px-3 py-2 mt-3 flex items-center flex-row mx-auto rounded-full w-full bg-navbar-gradient`}>
            {/* Logo */}
            {/* <Link href="/">
              Home
            </Link>
            <Link href="/sobre">
              Sobre
            </Link>
            <Link href="/contato">
              Contato
            </Link> */}
            <Link href="/contato" className='hidden sm:flex ml-auto group' onClick={() => setToggle(false)} >
              <div className='
              bg-gray-light-solid 
              h-[38px] 
              rounded-full 
              flex 
              items-center 
              px-[22px] 
              mr-3 
              transition-all 
              ease-out 
              duration-500
              group-hover:transition-all group-hover:ease-out group-hover:duration-500
              group-hover:bg-gradient-radial
              group-hover:drop-shadow-[0_5px_15px_rgba(121,128,151,0.35)]
              group-hover:rounded-[46px]
             group-hover:border-white'>
                <p className='font-neue-semibold text-sm text-navbar-text-hover whitespace-nowrap'>Solicitar cotação</p>
              </div>
            </Link>

            {/* Hamburger */}
            <motion.nav
              initial={false}
              animate={toggle ? "open" : "closed"}
              className='block ml-auto sm:ml-0 group'
            >
              <div className='bg-text-primary h-[38px] w-[68px] rounded-full flex justify-center items-center relative
               transition-all 
               ease-out 
               duration-500
               group-hover:transition-all 
               group-hover:ease-out 
               group-hover:duration-500
               group-hover:bg-gradient-radial
               group-hover:drop-shadow-[0_5px_15px_rgba(121,128,151,0.35)]
               group-hover:rounded-[46px]
               group-hover:border-white
               group-hover:text-text-primary
              '>
                <MenuToggle
                  toggle={() => {
                    setToggle(!toggle)
                  }}
                />
              </div>
            </motion.nav>
          </div>
        </div>

        <div className={`${toggle ? "" : "hidden"} container flex flex-col justify-between h-full`} >
          <motion.div
            initial={false}
            animate={toggle ? "open" : "closed"}
            variants={openLinks}
            style={{}}
            className='ml-auto h-full flex justify-center items-center'>
            <ul className='uppercase mt-5 flex flex-col items-end '>
              {headerData.map((i) => (
                <Link key={i.id} href={i.href} className={`ease-in-out transition duration-300 mb-9`} onClick={() => setToggle(false)}>
                  <div className='flex flex-row items-center'>
                    <div className={` ${pathname === i.href ? 'bg-text-primary' : 'bg-white'}  mr-6 py-3 px-[14px] rounded-full h-fit flex justify-center items-center`}>
                      <p className={`font-monument text-sm leading-[100%] ${pathname === i.href ? 'text-white' : 'text-navbar-text '} group-hover:text-text-primary pt-[4px]`}>
                        {i.number}
                      </p>
                    </div>
                    <p className={`${pathname === i.href ? 'text-text-primary' : 'text-navbar-text'} font-monument text-2xl lg:text-4xl ease-out transition duration-500 hover:ease-out hover:transition hover:duration-500 hover:text-text-primary py-2`}>
                      {i.text}
                    </p>
                  </div>
                </Link>
              ))}
            </ul>
          </motion.div>

          <motion.div
            style={{}}
            className={`block pb-4 relative`}
            initial={false}
            animate={toggle ? "open" : "closed"}
            variants={openSocial}
          >
            <div className='flex flex-row mb-[14px] '>
              {generalData.darkLinks.map((i) => (
                <a target='_blank' href={i.href} className='mr-4 z-10' key={i.id}>
                  <Image
                    src={i.image}
                    alt={`${i.name} Social Media Icon`}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
            <div className='z-10 mb-[30px] '>
              <Link href="https://maps.app.goo.gl/oGCc8jbo39xTqpQWA" className='cursor-pointer z-10' target='_blank'>
                <p className='font-neue text-base text-navbar-text z-10 '>{generalData.adressLine}</p>
                <p className='font-neue text-base text-navbar-text z-10'>{generalData.zipCode}</p>
              </Link>
            </div>

            <div className='absolute bottom-0 z-0' style={{ zIndex: "-10 !important" }} >
              <Image style={{ zIndex: "0px !important" }} className='z-0' src="/assets/main/gradient-k.svg" height={425} width={267} alt='Kemmi Gradient Logo' />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

