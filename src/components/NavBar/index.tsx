"use client"; // This is a client component 
import React,{ useState } from "react";
import { Star } from "@/assets/star";
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter();


  const openHandleMenu = () => {
    setOpenMenu(!openMenu)
  }


  const handleGoPage = (e: any, path: string) => {
    e.preventDefault();
    router.push(`/${path}`);
  }

  return (
    <>
      <nav className='flex items-center justify-between flex-wrap bg-white pl-24 pt-6 pr-6 sm:pl-6 md:pl-6 pb-4 border-b border-gray'>
        <div className="flex items-center mr-14 flex-shrink-0 text-indigo-900 mr-6">
          <span className="font-semibold text-secondary text-lg tracking-tight">BANK</span>
          <Star color="#9FC733" />
        </div>
        <div className="block lg:hidden xl:hidden">
          <button onClick={() => {openHandleMenu()}} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
          {/* <!-- Menu Mobile --> */}
          {
            openMenu &&
            <div style={{position: "absolute", right:0}} className="z-10 lg:hidden xl:hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                  <li>
                    <a href="#" onClick={(e) => handleGoPage(e,'')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-secondary dark:hover:text-primary">Home</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-secondary dark:hover:text-primary">Productos</a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => handleGoPage(e,'nosotros')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-secondary dark:hover:text-primary">Nosotros</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-secondary dark:hover:text-primary">Precios</a>
                  </li>
                </ul>
            </div>
          }
        </div>
        <div className=" w-full sm:hidden md:hidden  text-indigo-900 block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm text-blue lg:flex-grow">
            <a onClick={(e) => handleGoPage(e,'')} href="#responsive-header" className="block mt-4 mr-14 lg:inline-block lg:mt-0 hover:text-blueDark hover:border-b-4 mr-4">
              Home
            </a>
            <a href="#responsive-header" className="block mt-4 mr-14 lg:inline-block lg:mt-0 hover:text-blueDark hover:border-b-4 mr-4">
              Productos
            </a>
            <a  onClick={(e) => handleGoPage(e,'nosotros')}  href="#responsive-header" className="block mt-4 mr-14 lg:inline-block lg:mt-0 hover:text-blueDark hover:border-b-4 mr-4">
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
    </>
  )
}

export default NavBar;