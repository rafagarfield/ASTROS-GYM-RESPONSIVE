import React from 'react'
import Image from 'next/image'
import Gradient from '../Gradient/Gradient'
import styles from "../Header/Header.module.css"
function Header() {
  return (
    <div>
      <div className='w-full flex flex-col justify-center items-center gap-2'>
        <h1 className='text-[32px] text-center font-semibold text-white'>¡Hola! ,Bienvenido a </h1>
        <div className='w-[76%] bg-[#f42c3742] text-center'>
            <span className={styles.logo}>ASTROS GYM</span>
        </div>
        <p className='text-[#F4D58D] text-center'>Gimnasio | Quiropráxia | Bienestar</p>
        <div className=" absolute top-[0px] left-[0px]">
          <Gradient />
        </div>
        <Image className='flex justify-center items-center' src="https://res.cloudinary.com/df5rqpdzh/image/upload/v1726356080/model_qg7s4i.svg" alt='' width={300} height={400}/>
        <p className='text-white text-center text-2xl'>“Donde <span className='text-[#F42C37]'>superas</span> tus límites todos los días”</p>
       
        <div>
        <button className='bg-[#F42C37] text-white  text-[18px] font-medium w-[285px] rounded-[20px] p-2 mt-4'>Empezar</button>
        </div>
      </div>
    </div>
  )
}

export default Header
