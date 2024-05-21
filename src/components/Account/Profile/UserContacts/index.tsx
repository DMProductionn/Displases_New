import style from './UserContacts.module.css'
import React from 'react'
export default function UserContacts() {
    return (
        // Общий контейнер
        <div className={`${style.wrapper} w-full flex flex-wrap items-start content-start p-[20px]`}>
            {/* Карточка 1 */}
            <div className={`${style.block} w-full flex  flex-col items-start gap-[10px]`}>
                {/* Контейнер для заголовка */}
                <div className="w-full flex justify-between">
                    {/* Заголовок */}
                    <h3 className={`${style.title} text-white font-[700] not-italic`}>Email address</h3>
                    {/* Верификация */}
                    <div className="flex flex-nowrap items-center gap-[12px]">
                        <p className={`${style.text} text-white font-[400] not-italic leading-[22px]`}>
                            Verified
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" className={style.svg} viewBox="0 0 16 16" fill="none">
                            <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.0303 4.96967C11.7374 4.67678 11.2626 4.67678 10.9697 4.96967C10.9626 4.97674 10.9559 4.98424 10.9498 4.9921L7.4774 9.41674L5.38388 7.32322C5.09098 7.03033 4.61611 7.03033 4.32322 7.32322C4.03032 7.61612 4.03032 8.09099 4.32322 8.38388L6.96966 11.0303C7.26256 11.3232 7.73743 11.3232 8.03032 11.0303C8.03685 11.0238 8.043 11.0169 8.04876 11.0097L12.041 6.01947C12.3232 5.72582 12.3196 5.25897 12.0303 4.96967Z" fill="#00E577" />
                        </svg>
                    </div>
                </div>
                {/* Контейнер для input, button */}
                <div className="w-full min-h-[22px] max-h-[45px] h-[4.5vh] bg-[#111] rounded-[6px] flex items-center justify-between gap-[10px] px-[5px]">
                    <input
                        type="email"
                        name="" id=""
                        className="w-full px-[5px] bg-[#111] rounded-[6px]"
                        placeholder="user@gmail.com"
                    />
                    <button className="min-h-[17px] max-h-[38px] h-[3.5vh] py-[5px] px-[9px] rounded-[6px] bg-[#333232] flex justify-center items-center">Сохранить</button>
                </div>
            </div>

            {/* Карточка 2 */}
            <div className={`${style.block} w-full flex  flex-col items-start gap-[10px]`}>
                {/* Контейнер для заголовка */}
                <div className="w-full flex justify-between">
                    {/* Заголовок */}
                    <h3 className={`${style.title} text-white font-[700] not-italic`}>Мобильный телефон</h3>
                    {/* Верификация */}
                    <div className="flex flex-nowrap items-center gap-[12px]">
                        <p className={`${style.text} text-[#929192] font-[400] not-italic leading-[22px]`}>
                            Verified
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" className={style.svg} viewBox="0 0 16 16" fill="none">
                            <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.0303 4.96967C11.7374 4.67678 11.2626 4.67678 10.9697 4.96967C10.9626 4.97674 10.9559 4.98424 10.9498 4.9921L7.4774 9.41674L5.38388 7.32322C5.09098 7.03033 4.61611 7.03033 4.32322 7.32322C4.03032 7.61612 4.03032 8.09099 4.32322 8.38388L6.96966 11.0303C7.26256 11.3232 7.73743 11.3232 8.03032 11.0303C8.03685 11.0238 8.043 11.0169 8.04876 11.0097L12.041 6.01947C12.3232 5.72582 12.3196 5.25897 12.0303 4.96967Z" fill="#929192" />
                        </svg>
                    </div>
                </div>
                {/* Контейнер для input, button */}
                <div className="w-full min-h-[22px] max-h-[45px] h-[4.5vh] bg-[#111] rounded-[6px] flex items-center justify-between gap-[10px] px-[5px]">
                    <input
                        type="tel"
                        name="" id=""
                        className="w-full px-[5px] bg-[#111] rounded-[6px]"
                        placeholder="+7 (912) 000-00-00"
                    />
                    <button className="min-h-[17px] max-h-[38px] h-[3.5vh] py-[5px] px-[9px] rounded-[6px] bg-[#333232] flex justify-center items-center">Сохранить</button>
                </div>
            </div>
        </div>
    )
}