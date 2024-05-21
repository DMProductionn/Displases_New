import React from "react"
import { useRouteError, Link } from "react-router-dom"
import style from './Error.module.css'

import Header from "../Layout/Header"
import Footer from "../Layout/Footer"

export default function Error() {
  const error = useRouteError()

  return (
    <div>
      <Header />
      <div className="max-w-[1170px] m-auto">
        <div className={`flex fle-col items-center justify-center w-full bg-gray-main relative h-[100vh] rounded-[6px]`}>
            <Link to='/'><button className='p-[8px] min-w-[132px] bg-[#333232] rounded-[6px] absolute top-[15px] left-[15px]'>На главную</button></Link>
            {/* <h1><i>{error.statusText || error.message}</i></h1> */}
            <div className="text-center">
              <p className="text-[22px] text-[#F64343]">Error</p>
              <p className="text-[120px] leading-[90px] my-[15px] font-[700]">404</p>
              <p className="text-[16px] text-[#717171]">страница не найдена</p>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}
