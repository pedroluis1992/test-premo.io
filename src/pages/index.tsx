"use client"; // This is a client component 
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import mockData from '../mockData/mockData.json';
import Card from '../components/Card';
import image from '../assets/hero.jpg'; // with import// import "./style.css"
import QuestionItem from '../components/QuestionItem';
import { useRouter } from 'next/navigation';


const RIGHT = "right";
const LEFT = "left";
export default function Home() {
  const router = useRouter();
  const [stepScroll, setStepScroll] = useState<number>(0);
  const [openQuestion, setOpenQuestion] = useState<any>({});
  const [openMenu, setOpenMenu] = useState(false)


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
        <div className="w-full h-screen bg-primary pb-24" >
          <div className="w-full xl:h-1/2 lg:h-1/2 sm:h-3/4 rounded-bl-[10000px] rounded-br-full bg-white mt-[2%]">
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
                <Image alt="imagen-hero" className="h-3/5 w-full self-end" src={image} />
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
        </div>

        <div className="w-full h-full bg-primary sm:pt-16 md:pt-16 pl-16 pr-16">
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
                    <Card key={credit.id} title={credit.title} description={credit.description} />
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className="w-full h-full bg-american-silver pl-16 pr-16 pt-10 pb-26">
          <p className='flex justify-center text-lg sm:text-base font-semibold text-secondary'>Preguntas frecuentes</p>
          <p className='mt-6 text-sm text-justify	pl-28 pr-28 sm:pl-2 sm:pr-2 md:pl-2 md:pr-2 text-secondary'>Tenemos a tu disposición toda la información que necesitas conocer, así como también sobre el proceso de facturación y pagos. Además, nuestro equipo de atención al cliente está disponible para brindarte asesoramiento y resolver cualquier duda que puedas tener al respecto</p>
          {
            mockData.frecuentlyQuestions.map((question) => {
              return (
                <QuestionItem key={question.id} title={question.title} description={question.description} onChange={() => closeQuestionItem(question.id)} open={openQuestion[question.id]}/>
              )
            })
          }
        </div>
    </>
  )
}
