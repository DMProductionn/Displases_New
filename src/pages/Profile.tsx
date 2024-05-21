import React from "react"
import PersonalData from "../components/Account/Profile/PersonalData"
import UserContacts from "../components/Account/Profile/UserContacts"
import BackBtn from "../components/Buttons/BackBtn"
import Bio from "../components/Account/Profile/Bio"

export default function Profile() {

    return (
        <div className='w-full max-w-[1200px] min-w-[320px] rounded-[6px] bg-[#1d1d1d] p-[20px] relative'>

            <BackBtn />

            {/* Заголовок страницы */}
            <div className="flex justify-center">
                <h1 className='text-[18px] sm:text-[24px] font-Floripa'>ПРОФИЛЬ</h1>
            </div>
            <Bio />
            <UserContacts />
            <PersonalData />

            {/* Кнопка сохранить */}
            <div className='flex justify-center'>
                <button className='p-3 rounded-[6px] bg-[#F64343] text-white text-center text-[12px] font-[700]'>СОХРАНИТЬ</button>
            </div>
        </div>
    )
}