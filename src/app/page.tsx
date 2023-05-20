"use client"; // This is a client component 
import React, { useEffect, useState } from 'react';
import { Star } from "./assets/star";
import Image from 'next/image';
import mockData from './mockData/mockData.json';
import Card from './components/Card';
import logo from './assets/hero.jpg'; // with import// import "./style.css"
import QuestionItem from './components/QuestionItem';

const RIGHT = "right";
const LEFT = "left";
export default function Home() {

  const [stepScroll, setStepScroll] = useState<number>(0);
  const [openQuestion, setOpenQuestion] = useState<any>({});


  const moveToScroll = (direction: string) => {
    scrollFun(direction)
  }

  const scrollFun = (direction: any) => {
    if (direction === RIGHT) {
      setStepScroll(stepScroll + 150)
    } else if (direction === LEFT && stepScroll > 0) {
      setStepScroll(stepScroll - 150)
    }
  };

  const closeQuestionItem = (id: number) => {
    // setOpenQuestion([{[id]: !openQuestion}])
    setOpenQuestion({
      ...openQuestion,
      [id]: !openQuestion[id]
    })
  }

  useEffect(() => {
    document.getElementById('boxesCredits')?.scrollTo(stepScroll, 0);
  }, [stepScroll])

  return (
    <>
      <header>
        <nav className='flex items-center justify-between flex-wrap bg-white pl-24 pt-6 pr-6 sm:pl-6 md:pl-6 pb-4 border-b border-gray'>
          <div className="flex items-center mr-14 flex-shrink-0 text-indigo-900 mr-6">
            <span className="font-semibold text-secondary text-lg tracking-tight">BANK</span>
            <Star color="#9FC733" />
          </div>
          <div className="block lg:hidden xl:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
          <div className=" w-full sm:hidden md:hidden  text-indigo-900 block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm text-blue lg:flex-grow">
              <a href="#responsive-header" className="block mt-4 mr-14 lg:inline-block lg:mt-0 hover:text-blueDark hover:border-b-4 mr-4">
                Home
              </a>
              <a href="#responsive-header" className="block mt-4 mr-14 lg:inline-block lg:mt-0 hover:text-blueDark hover:border-b-4 mr-4">
                Productos
              </a>
              <a href="#responsive-header" className="block mt-4 mr-14 lg:inline-block lg:mt-0 hover:text-blueDark hover:border-b-4 mr-4">
                Nosotros
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-blueDark hover:border-b-4 ">
                Precios
              </a>
            </div>
            <div>
              <a href="#" className="text-smx px-4 py-2 bg-blue rounded-lg text-white">Acceder</a>
            </div>
          </div>
        </nav>
      </header>
      <body>
        <section className="w-full h-screen bg-primary pb-24" >
          <div className="w-full xl:h-2/5 lg:h-2/5 sm:h-3/4 rounded-bl-[10000px] rounded-br-full bg-white mt-[2%]">
            <div className="lg:gap-8 lg:columns-2 xl:gap-8 xl:columns-2" >
              <div className="h-4/5 lg:pl-40 xl:40 md:pl-8 sm:pl-8 pt-16  content-center">
                <div className="justify-center text-secondary font-semibold text-xl">
                  Nuestro negocio es hacer
                  <p className="text-primary">
                    crecer el tuyo.
                  </p>
                </div>
                
                  <button className="sm:hidden md:hidden rounded-full bg-terciary text-sm p-2">Contacta a un ejecutivo</button>
              </div>
              <div className="h-4/5 md:h-4/5 lg:h-4/5 xl:h-3/4 2xl:w-3/4 2xl:h-3/4 2xl:mr-0 sm:p-8 md:p-8">
                <Image alt="imagen-hero" className="h-3/5 w-full self-end" src={logo} />
              </div>
              <div className='flex justify-center'>
                <button className="lg:hidden xl:hidden text-white rounded-full bg-terciary text-sm p-2">Contacta a un asesor</button>
              </div>
            </div>
            <p className="text-lg  flex justify-center mt-5 sm:text-center text-terciary">
              Soluciones financieras efectivas
            </p>
            <p className="text-sm  flex justify-center mt-5 text-terciary">
              Crédito PyME, inversión, paneles solares
            </p>
          </div>
        </section>

        <section className="w-full h-full bg-primary sm:pt-16 md:pt-16 pl-16 pr-16">
          <p className="text-lg  flex justify-start text-terciary">Liquidez inmediata</p>
          <div className="flex">
            <p className="text-lg flex justify-start text-terciary mr-2">para tu </p> <p className="text-lg  flex justify-start text-textContrast">negocio.</p>
          </div>
          <div className="xl:flex xl:flex-cols-2 lg:flex lg:flex-cols-2 xl:gap-64 lg:gap-64 mt-4 " >
            <div className="col-span-2">
              <p className="text-sm text-terciary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla,
                mattis ligula consectetur, ultrices mauris.
              </p>
            </div>
            <div className="lg:flex lg:col-span-2 xl:flex xl:col-span-2 sm:mt-12 md:mt-12 sm:flex sm:justify-evenly  md:flex md:justify-evenly">
              <div className="w-12 h-12 bg-blue lg:mr-16 xl:ml-16 rounded-full" onClick={() => moveToScroll("left")}></div>
              <div className="w-12 h-12 bg-blue lg:mr-16 xl:ml-16 rounded-full" onClick={() => moveToScroll("right")}></div>
            </div>
          </div>
          <div
            className="bg-gray-800 w-full h-3/4 flex justify-center items-center"
          >
            <ul
              id={'boxesCredits'}
              className="w-full md:w-3/4 m-2 lg:w-full flex justify-between items-start mb-8 space-x-3 overflow-x-scroll stories p-4 rounded drop-shadow-xl"
            >
              {
                mockData.credits.map((credit) => {
                  return (
                    <Card title={credit.title} description={credit.description} />
                  )
                })
              }
            </ul>
          </div>
        </section>
        <section className="w-full h-full bg-american-silver pl-16 pr-16 pt-10 pb-26">
          <p className='flex justify-center text-lg sm:text-base font-semibold text-secondary'>Preguntas frecuentes</p>
          <p className='mt-6 text-sm text-justify	pl-28 pr-28 sm:pl-2 sm:pr-2 md:pl-2 md:pr-2 text-secondary'>Tenemos a tu disposición toda la información que necesitas conocer, así como también sobre el proceso de facturación y pagos. Además, nuestro equipo de atención al cliente está disponible para brindarte asesoramiento y resolver cualquier duda que puedas tener al respecto</p>
          {
            mockData.frecuentlyQuestions.map((question) => {
              return (
                <QuestionItem key={question.id} title={question.title} description={question.description} onChange={() => closeQuestionItem(question.id)} open={openQuestion[question.id]}/>
              )
            })
          }
        </section>
        <section className="w-full h-ful bg-white pl-24 sm:pl-8 md:pl-8 pr-8 pt-8 pb-16">
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
        </section>
      </body>
    </>
  )
}
