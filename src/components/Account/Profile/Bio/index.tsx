import style from './index.module.css'
import React from 'react'

export default function Bio() {
    return (
        <div className={`${style.wrapper} flex w-full p-[20px]`}>
            <div className="flex gap-[20px] w-full">
            <svg width="100" height="100" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6C11 7.65685 9.65685 9 8 9C6.34315 9 5 7.65685 5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6Z" fill="#929192"/>
<path d="M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM14 1C14.5523 1 15 1.44772 15 2V14C15 14.5523 14.5523 15 14 15V14C14 13 13 10 8 10C3 10 2 13 2 14V15C1.44772 15 1 14.5523 1 14V2C1 1.44772 1.44772 1 2 1H14Z" fill="#929192"/>
            </svg>
              
        <div className="flex flex-col items-start gap-[7px]">
                    <h3 className="text-[#fff] text-[30px] font-[700]">Username</h3>
                    <p className="text-[#929192] text-[14px] font-[400]">Пользователь</p>
        </div>
        </div>
            <div className="flex items-start flex-col w-full gap-[20px]">
                <h3 className="text-[#fff] text-[20px] font-[700]">Пол</h3>
                <div className="flex content-start gap-[20px]">
                    <button className="text-[#929192] text-[14px] font-[400] flex flex-nowrap gap-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <g clip-path="url(#clip0_185_810)">
                                <rect y="0.5" width="16" height="16" rx="2" fill="white" />
                            </g>
                        </svg>
                        Мужской
                    </button>
                    <button className="text-[#929192] text-[14px] font-[400] flex flex-nowrap gap-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <g clip-path="url(#clip0_185_806)">
                                <rect y="0.5" width="16" height="16" rx="2" fill="#333232" />
                            </g>
                        </svg>
                        Женский
                    </button>
                </div>
            </div>
        </div>
    )
}
