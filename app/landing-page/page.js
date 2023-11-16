'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { generalData } from '@/data/general-data';


export default function Home() {
  const year = new Date().getFullYear()

  const [disabled, setDisabled] = useState(false)

  async function handleOnSubmit(e) {

    e.preventDefault();
    const formData = {}

    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    setDisabled(true)

    if (formData.email != "" || null) {
      await fetch(
        '/contato/send',
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function (res) {
          console.log('RES', res)
          if (res.status === 200) {
            toast.success('Enviado con exito!', {
              autoClose: 5000,
            })
            setDisabled(true)
          } else {
            toast.error('Error. Vuelva a intentarlo más tarde.', {
              autoClose: 5000,
            })
            setDisabled(false)
          }
        })
        .catch(function (err) {
          console.log('ERR', err)
        })
    }
  }

  return (
    <section
      className='h-screen w-full flex flex-col justify-center items-center relative'
      style={{
        background: 'linear-gradient(0deg, #f2004127 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 80%, #f200411f 100%)',
      }}
    >
      <div className='mb-20'>
        <Image
          src="/assets/main/main-logo.svg"
          height={200}
          width={200}
          alt="Kemmi Logo"
        />
      </div>

      <div className='flex flex-col justify-center items-center'>
        <p className='text-center text-lg'>
          Site em desenvolvimento
        </p>
        <p className='mb-20 text-gray' >
          Fique por dentro das próximas novidades.
        </p>

        <form method='post' onSubmit={handleOnSubmit} style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'end',
          width: '100%',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
          }}>
            <input
              required
              type='email'
              name='email'
              id='email'
              placeholder='Email Adress'
              style={{
                height: '40px',
                width: '100%',
                borderRadius: '20px',
                border: 'none',
                paddingLeft: '20px',
                color: 'white',
                backgroundColor: '#2b2b2b',
                minWidth: "250px",
                marginBottom: '20px',
                maxWidth: '350px'
              }}
            />
            <button
              disabled={disabled}
              style={{
                height: '40px',
                borderRadius: '20px',
                border: 'none',
                color: 'white',
                backgroundColor: '#000000',
                padding: '10px 20px',
                boxShadow: '0px 0px 2px white',
                width: '110px',
                maxWidth: '120px',
                cursor: 'pointer'
              }}
            >
              Enviar
            </button>
          </div>

        </form>
      </div>

      <div className='flex flex-row justify-between absolute bottom-0 w-full container'>

        <div className='w-full text-xs'>
          © {generalData.name} {`${year}`} - All Rights Reserved.
        </div>

        <div
          className='flex flex-row w-full justify-end'>
          {generalData.links.map((i) => (
            <a href={i.href} className='ml-4 brightness-[40%]'>
              <Image
                src={i.image}
                height={24}
                width={24}
                alt={`${i.name} Social Media Icon`}
              />
            </a>
          ))}
        </div>
      </div>

    </section>
  )
}
