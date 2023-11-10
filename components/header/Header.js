'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
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
        duration: 0.6
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
    <>
      <motion.div
        className={`z-[999] w-screen fixed flex flex-col min-h-[80px]`}
        animate={toggle ? "open" : "closed"}
        variants={openNav}
        initial={false}
      >
        <div className={`container px-3 py-2 mt-3 flex items-center flex-row mx-auto bg-navbar-gradient rounded-full backdrop-blur-[12.5px]`}>
          {/* Logo */}
          <a href='/' className='pr-5'>
            <Image
              src="/assets/main/main-logo.svg"
              alt="Hokup Logo"
              width={144}
              height={44}
            />
          </a>

          {/* Navigation
          <div className='ml-auto hidden md:flex flex-row justify-end items-center w-full text-xs text-content '>
            {headerData.map((i) => (
              <Link key={i.id} href={i.href} className='px-5 text-navbar-text hover:text-navbar-text-hover'>
                {i.text}
              </Link>
            ))}
          </div> */}

          <Link href="/contato" className='hidden sm:flex ml-auto' onClick={()=>setToggle(false)} >
            <div className='bg-gray-light h-[38px] rounded-full flex items-center px-[22px] mr-3'>
              <p className='font-neue-semibold text-sm text-navbar-text-hover whitespace-nowrap'>Solicitar cotação</p>
            </div>
          </Link>

          {/* Hamburger */}
          <motion.nav
            initial={false}
            animate={toggle ? "open" : "closed"}
            className='block ml-auto sm:ml-0'
          >
            <div className='bg-text-primary h-[38px] w-[68px] rounded-full flex justify-center items-center relative'>
              <MenuToggle
                toggle={() => {
                  setToggle(!toggle)
                }}
              />
            </div>
          </motion.nav>
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
                      <p className={`font-monument text-sm  leading-[100%] ${pathname === i.href ? 'text-white' : 'text-navbar-text '} group-hover:text-text-primary`}>
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
              {generalData.links.map((i) => (
                <a target='_blank' href={i.href} className='mr-4 z-10' onClick={() => setToggle(!toggle)}>
                  <Image
                    src={i.image}
                    alt={`asd ${i.name}`}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
            <div className='z-10 mb-[30px] '>
              <Link href="https://maps.app.goo.gl/oGCc8jbo39xTqpQWA" className='cursor-pointer z-10' target='_blank' onClick={() => setToggle(!toggle)} >
                <p className='font-neue text-base text-navbar-text z-10 '>{generalData.adressLine}</p>
                <p className='font-neue text-base text-navbar-text z-10'>{generalData.zipCode}</p>
              </Link>
            </div>

            <div className='absolute bottom-0 z-0' style={{ zIndex: "-10 !important" }} >
              <Image style={{ zIndex: "0px !important" }} className='z-0' src="/assets/main/gradient-k.svg" height={425} width={267} alt='' />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

