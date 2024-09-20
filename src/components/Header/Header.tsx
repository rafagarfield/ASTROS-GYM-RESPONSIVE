import React from 'react'
import Image from 'next/image'
import Gradient from '../Gradient/Gradient'
// import styles from "../Header/Header.module.css"
function Header() {
  return (
    <div>
      <div className='w-full flex flex-col justify-center items-center gap-2'>
        <h1 className='text-[35px] text-center font-semibold text-white mb-0'>¡Hola! ,Bienvenido a </h1>
            <span className='text-[35px]  font-semibold text-red-600'>ASTROS <span className='text-white'>GYM</span> </span>
            <div className='flex justify center '> 
            <span className='text-[#F4D58D] text-center p-0'>Gimnasios | Quiropráxia | Bienestar </span>
            </div>
       
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
