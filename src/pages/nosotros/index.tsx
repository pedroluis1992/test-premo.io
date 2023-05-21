import React from 'react';
import Image from 'next/image';
import image from '../../assets/Image.png';
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';
import person3 from '../../assets/person3.png';

export default function Nosotros() {
  return (
    <>
      <div className='w-full h-full'>
        <div className="w-full h-2/5 bg-white pt-20 pb-20" >
          <p className='flex justify-center text-info'>Nosotros</p>
          <p className='flex justify-center text-blueDark text-xl pt-4'>Informacion sobre la compañia</p>
          <p className='flex justify-center text-secondary text-base pt-4'>Aprende más acerca de la empresa y el equipo detrás de ella </p>
        </div>
        <div className="w-full bg-gray-light p-8 flex justify-evenly" >
          <div className='h-1/4 w-2/5'>
            <Image alt="imagen" src={image} />
          </div >
          <div className='pt-12'>
            <p className='text-blue'>Hemos ayudado a muchas compañías a lo largo de estos años</p>
            <p className='text-secondary pt-2 text-lgx'>Esto solo es el comienzo</p>
            <div className='pt-16 flex justify-between'>
              <div>
                <p className='text-blue text-xlx'>400 +</p>
                <p className='text-secondary text-basex'>Empresas</p>
                <p className='text-blue text-xlx pt-12'>10 K</p>
                <p className='text-secondary text-basex'>Prestamos Otorgados</p>
              </div>
              <div>
                <p className='text-blue text-xlx'>600 %</p>
                <p className='text-secondary text-basex'>Crecimiento en 2 años</p>
                <p className='text-blue text-xlx  pt-12'>200 +</p>
                <p className='text-secondary text-basex'>Reseñas de 5 estrellas</p>
              </div>
            </div>
          </div>

        </div>
        <div className='h-full bg-white pt-16 pb-16 pl-72 pr-72'>
          <p className='flex justify-center text-blue'>Estamos contratando</p>
          <p className='flex justify-center text-secondary text-lg pt-4'>Conoce a nuestro equipo</p>
          <p className='flex text-center  text-woodsmoke text-basex pt-4'>Tenemos una filosofía sencilla: contratamos a individuos apasionados y diversos, y creamos una cultura que les permita realizar su trabajo de la mejor manera posible.</p>
          <div className='flex justify-center mt-8'>
            <button className="rounded-full bg-blue text-white text-sm p-2 pl-4 font-semibold pr-4">Vacantes disponibles</button>
          </div>
          <div className='flex justify-center pt-16'>
            <div className="flex flex-none flex-col items-center space-y-1 pr-16">
              <div
                className="rounded-lg bg-gray-light w-72 h-80 p-4 pb-12 "
              >
                <div className='flex justify-center pt-6 pb-6'>
                  <Image alt="imagen" src={person2} className='w-20 h-20 rounded-full' />
                </div>
                <p className="text-secondary mb-2 text-basex flex justify-center">Elspeth Watkiss</p>
                <p className="text-blueDark mb-2 text-sm flex justify-center">Fundador</p>
                <p className="text-sm text-grayLight mt-4 flex justify-center">Fundador de PREMO</p>
                <div className='flex justify-center pt-6'>
                  <div className="w-8 h-8 bg-blue rounded-full flex justify-center"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-none flex-col items-center space-y-1">
              <div
                className="rounded-lg bg-gray-light w-72 h-80 p-4 pb-12"
              >
                <div className='flex justify-center pt-6 pb-6'>
                  <Image alt="imagen" src={person1} className='w-20 h-20 rounded-full' />
                </div>
                <p className="text-secondary mb-2 text-basex flex justify-center">Linette Sebrens</p>
                <p className="text-blueDark mb-2 text-sm flex justify-center">CEO</p>
                <p className="text-sm text-grayLight mt-4 flex justify-center">Directora general de PREMO</p>
                <div className='flex justify-center pt-6'>
                  <div className="w-8 h-8 bg-blue rounded-full flex justify-center"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="w-full p-8 flex justify-space-between" >

          <div className='pt-12 pl-16 w-2/4'>
            <p className='text-secondary text-lg'>Contactanos</p>
            <p className='text-secondary pt-2 text-grayLight text-basex mr-16'>Nuestro equipo de ejecutivos estará encantado de ayudarte y resolver tus dudas</p>
            <div className='pt-16'>
              <div className='flex justify-between'>
                <label className="block mr-8">
                  <span className='text-smx' >
                    Nombre
                  </span>
                  <input type="text" name="FirstName" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Primer nombre" />
                </label>
                <label className="block mr-16">
                  <span className='text-smx' >
                    Apellidos
                  </span>
                  <input type="text" name="LastName" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Apellidos" />
                </label>
              </div>
              <label className="block mr-16 mt-6">
                <span className='text-smx' >
                  Email
                </span>
                <input type="text" name="FirstName" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="tucorreo@ejemplo.com" />
              </label>
              <label className="block mr-16 mt-6">
                <span className='text-smx' >
                  Numero de telefono
                </span>
                <input type="text" name="FirstName" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="tucorreo@ejemplo.com" />
              </label>
              <label className="block mr-16 mt-6">
                <span className='text-smx' >
                  Mensaje
                </span>
                <textarea className="mt-1 px-3 py-6 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 resize-none rounded-md"></textarea>
              </label>
              <div className='flex mt-8'>
                <input type="checkbox" className="default:ring-2 w-4 h-4 mr-6" />
                <p>Estoy de acuerdo con nuestra política de privacidad.</p>
              </div>
              <div className='mr-16 mt-8'>
                <button className="rounded-lg bg-blue text-white text-smx pl-6 pr-6 sm:mt-6 md:mt-6 w-full ">Suscribete</button>
              </div>

            </div>
          </div>
          <div className='pr-8 w-1/2 '>
            <Image alt="imagen" src={person3} />
          </div >
        </div>
      </div>
    </>
  )
}