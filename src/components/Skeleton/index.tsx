import React from 'react';
import style from './Skeleton.module.css'

const Skeleton = ({ count=6 }) => {
  return (
    <>
        {[... new Array(count)].map((_, index) => (
          <div key={index} className={style.main}>
            <div className={style.title}></div>
            <div className={style.img}></div>
            <div className='flex'>
              <div className={style.price}></div>
              <div className={style.sale}></div>
            </div>
            <div></div>
          </div>
        ))}
    </>
  )
};

export default Skeleton;
