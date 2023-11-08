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
      height: '100vh',
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 1
      }
    },
    closed: {
      height: '80px',
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.3
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
        className='z-[999] w-screen fixed flex flex-col min-h-[80px]'
        animate={toggle ? "open" : "closed"}
        variants={openNav}
        initial={false}
      >
        <div className='container flex items-center flex-row mx-auto min-h-[80px] h-[80px]'>
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



          {/* Hamburger */}
          <motion.nav
            initial={false}
            animate={toggle ? "open" : "closed"}
            className='block ml-auto'
          >
            <div className='bg-text-primary h-[38px] w-[68px] rounded-full flex justify-center items-center'>
              <MenuToggle
                toggle={() => {
                  setToggle(!toggle)
                }}
              />
            </div>
          </motion.nav>
        </div>

        <div className={`${toggle ? "" : "hidden"} container md:hidden flex flex-col justify-between h-full`} >
          <motion.div
            initial={false}
            animate={toggle ? "open" : "closed"}
            variants={openLinks}
            style={{}}
            className='block'>
            <ul className='font-manrope uppercase text-lg text-content mt-5'>
              {headerData.map((i) => (
                <Link key={i.id} href={i.href} className={`mx-5 ease-in-out transition duration-300`} onClick={() => setToggle(false)}>
                  <p className={`${pathname === '/sobre' && 'text-green'} text-base ease-out transition duration-500 hover:ease-out hover:transition hover:duration-500 hover:text-white py-2`}>
                    {i.text}
                  </p>
                </Link>
              ))}
            </ul>
          </motion.div>

          <motion.div
            style={{}}
            className={`block pb-4`}
            initial={false}
            animate={toggle ? "open" : "closed"}
            variants={openSocial}
          >
            <div className='flex flex-row mb-1'>
              {generalData.links.map((i) => (
                <a target='_blank' href={i.href} className='mr-4'>
                  <Image
                    src={i.image}
                    alt={`asd ${i.name}`}
                    width={18}
                    height={18}
                  />
                </a>
              ))}
            </div>
            <a href={`mailto:${generalData.email}`} className='text-gray hover:text-dark-gray font-manrope font-normal'>{generalData.email}</a>
          </motion.div>
        </div>

      </motion.div>
    </>
  )
}

