"use client"; // This is a client component 
import React, { useState } from "react";
import { Star } from "@/assets/star";

const Footer = () => {

  return (
    <>
      <div className="w-full h-ful bg-white pl-24 sm:pl-8 md:pl-8 pr-8 pt-8 pb-16">
        <div className='flex items-center justify-between flex-wrap bg-white'>
          <div className="flex items-center flex-shrink-0 text-indigo-900 mr-6">
            <span className="font-semibold text-secondary text-lg tracking-tight">BANK</span>
            <Star color="#9FC733" />
          </div>
        </div>
        <div className='flex h-1/2 sm:flex-wrap md:flex-wrap justify-between pr-8 mt-6 mb-32'>
          <ul className='h-40 sm:w-full md:w-full sm:mb-16 md:mb-16'>
            <li className='font-semibold text-secondary'>
              Oficina
            </li>
            <div >
              <li className='text-smx text-secondary'>
                Calle de la oficina, Mexico.
              </li>
              <li>
                <div className='text-smx text-secondary'>
                  Teléfono
                </div>
                <div className='text-smx text-secondary'>
                  (55) 1234 567
                </div>
              </li>
              <li >
                <div className='text-smx text-secondary'>
                  Email
                </div>
                <div className='text-smx text-secondary'>
                  info@correoempresa.mx
                </div>
              </li>
            </div>
          </ul>
          <ul className='h-40'>
            <li className='font-semibold text-secondary'>
              Compañia
            </li>
            <div className='text-blue text-smx font-semibold ml-4'>
              <li>
                Empresas
              </li>
              <li>
                Personas
              </li>
              <li>
                Nosotros
              </li>
              <li>
                Blog
              </li>
            </div>
          </ul>
          <ul className='h-36'>
            <li className='font-semibold text-secondary'>
              Información
            </li>
            <div className='text-blue text-smx font-semibold ml-4'>
              <li>
                Educacion Financiera
              </li>
              <li>
                Tasas y Comisiones
              </li>
              <li>
                Descarga la App
              </li>
            </div>
          </ul>
          <ul className='h-36 sm:pt-8 md:pt-8'>
            <li className='font-semibold text-secondary'>
              Legal
            </li>
            <div className='text-blue text-smx font-semibold ml-4'>
              <li>
                Avisos de privacidad
              </li>
              <li>
                Terminos y condiciones
              </li>
              <li>
                Información financiera
              </li>
              <li>
                UNE
              </li>
              <li>
                CNBV
              </li>
              <li>
                Buró
              </li>
              <li>
                CONDUSEF
              </li>
            </div>
          </ul>
        </div>
        <div className='xl:flex xl:justify-between lg:flex lg:justify-between mb-8 mt-44'>
          <div>
            <p className='font-semibold text-smx'>Suscribete a nuestro newsletter.</p>
            <p className='text-smx'>Las últimas noticias, actualizaciones, tips y más cada semana.</p>
          </div>
          <div className='lg:flex lg:h-10 xl:flex xl:h-10'>
            <input type="email" name="email" className="text-secondary mr-4 mt-1 px-3 py-2 bg-gray shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Escribe tu correo aquí" />
            <button className="rounded-lg bg-blue text-white text-smx pl-6 pr-6 sm:mt-6 md:mt-6 sm:w-full md:w-full">Suscribete</button>
          </div>
          <div className='flex justify-center sm:mt-8 md:mt-8'>
            <div className="w-10 h-10 bg-blue mr-2 rounded-full"></div>
            <div className="w-10 h-10 bg-blue mr-2 rounded-full"></div>
            <div className="w-10 h-10 bg-blue mr-2 rounded-full"></div>
            <div className="w-10 h-10 bg-blue mr-2 rounded-full"></div>
            <div className="w-10 h-10 bg-blue mr-2 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;