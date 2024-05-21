import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import style from './SignIn.module.css'

export default function Index() {
    const navigate = useNavigate()
    
    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
    } = useForm({
        mode: 'onBlur'
    })

    const onSubmit = (data) => {
        console.log(data)
        navigate('/category')
    }

    return (
        <div className={style.wrapper}>
            {/* Кнопка выйти */}
            <button className='absolute top-4 right-4'>
                <Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path fillRule='evenodd' clipRule='evenodd' d="M4.24921 5.31378C3.95581 5.02038 3.95581 4.54468 4.24921 4.25128C4.54261 3.95788 5.01831 3.95788 5.31171 4.25128L8.49792 7.4375L11.6867 4.24872C11.9801 3.95532 12.4558 3.95532 12.7492 4.24872C13.0426 4.54212 13.0426 5.01782 12.7492 5.31122L9.56043 8.5L12.7492 11.6888C13.0426 11.9822 13.0426 12.4579 12.7492 12.7513C12.4558 13.0447 11.9801 13.0447 11.6867 12.7513L8.49792 9.5625L5.31171 12.7487C5.01831 13.0421 4.54261 13.0421 4.24921 12.7487C3.95581 12.4553 3.9558 11.9796 4.24921 11.6862L7.43542 8.5L4.24921 5.31378Z" fill="white" />
                    </svg>
                </Link>
            </button>
            {/* Заголовок и текст */}
            <div className={style.header}>
                <h1 className='font-[700] text-xl text-[#fff]'>SIGN IN</h1>
                <p className='text-base text-[#929192] font-[400] leading-[125%]'>In the event your details change, level one verification can be updated at a later date</p>
            </div>

            {/* Форма входа */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                method='get'
                action='https://657f17219d10ccb465d5edfb.mockapi.io/users'
                className='w-[100%] flex flex-col flex-nowrap'
            >
                <div className={style.info}>
                    <label className='w-full'>
                        <h3 className='font-[700]'>Email</h3>
                        <input
                            type="email"
                            {...register(
                                'email',
                                {
                                    required: '❗️Обязательное поле',
                                })}
                            className={style.input}
                        />
                        {errors?.email && <p className='mt-[10px]'>{errors?.email.message || '❗️Ошибка'}</p>}
                    </label>
                    <label className='w-full'>
                        <h3 className='font-[700]'>Password</h3>
                        <input
                            type="password"
                            {...register
                                ('password',
                                    {
                                        required: '❗️Обязательное поле',
                                    })}
                            className={style.input} />
                        {errors?.password && <p className='mt-[10px]'>{errors?.password.message || '❗️Ошибка'}</p>}
                    </label>
                </div>

                <hr className='border border-solid border-[#333232] my-[18px]' />
                <Link to='/profile'>
                <input type='submit' value='SIGN IN' className={`${style.sign} cursor-pointer`}/>
                </Link>
            </form>
        </div>
    )
}