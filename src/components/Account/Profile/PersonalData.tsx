import React from "react"
export default function PersonalData() {
    return (
      <div className="flex p-[20px] flex-col flex-nowrap gap-[15px] items-start w-full">
  
        <h3 className='text-white font-[700] text-[20px]'>Личные данные</h3>
        <div className="w-[100%]">
          <p className='text-[#929192] text-[14px] font-[400] capitalize mb-[15px]'>Имя</p>
          <input type="text" name="" id="" className='h-[4.5vh] min-h-[22px] max-h-[45px] w-[100%] py-1 px-2 rounded-[6px] bg-[#111]' />
        </div>
  
        <div className="w-[100%]">
          <p className='text-[#929192] text-[14px] font-[400] capitalize mb-[15px]' >Фамилия</p>
          <input type="text" name="" id="" className='h-[4.5vh] min-h-[22px] max-h-[45px] w-[100%] py-1 px-2 rounded-[6px] bg-[#111]' />
        </div>
  
        <div className="w-[100%]">
          <p className='text-[#929192] text-[14px] font-[400] capitalize mb-[15px]' >Дата рождения</p>
          <div className='w-[100%] flex justify-between gap-[10px]'>
            <input type="number" min="1" max="31" name="" id="" className='h-[4.5vh] min-h-[22px] max-h-[45px] w-[100%] py-1 px-2 rounded-[6px] bg-[#111]' placeholder="День" />
  
            {/* Не знаю как сделать placeholder серым  */}
            <select className='h-[4.5vh] min-h-[22px] max-h-[45px]  w-[100%] py-1 px-2 rounded-[6px] bg-[#111] appearance-none text-[#999] outline-none' >
              <option value="" disabled defaultValue='месяц' className='x'>Месяц</option>
              <option value="" className="text-white">Январь</option>
              <option value="">Февраль</option>
              <option value="">Март</option>
              <option value="">Апрель</option>
              <option value="">Май</option>
              <option value="">Июнь</option>
              <option value="">Июль</option>
              <option value="">Август</option>
              <option value="">Сентябрь</option>
              <option value="">Октябрь</option>
              <option value="">Ноябрь</option>
              <option value="">Декабрь</option>
            </select>
            <input type="number" min="1950" max="2015" className='h-[4.5vh] min-h-[22px] max-h-[45px] w-[100%] py-1 px-2 rounded-[6px] bg-[#111]' placeholder="Год" />
          </div>
        </div>
      </div>
    )
  }