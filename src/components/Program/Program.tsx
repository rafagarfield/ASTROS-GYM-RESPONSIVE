import React from 'react'
import Image from 'next/image'
function Program() {
  return (
    <div>
      
      <div className='w-full flex flex-col justify-center items-center gap-4'>
      <h2 className='w-[90%] text-white mt-8 mb-6 text-[24px] font-semibold'>EXPLORA NUESTRO PROGRAMA</h2>
        <div className='w-[90%] text-white bg-[#1F2125] border border-[#949494] rounded-[20px] p-[18px] flex flex-col gap-3' >
            <div className='flex flex-col gap-7'>
            <Image
              src="https://res.cloudinary.com/df5rqpdzh/image/upload/v1726371584/pesas_rln12p.svg"
              alt="Programa 1"
              width={50}
              height={50}
            />
            <h3 className='text-[18px] font-bold'>Entrenamiento personalizado</h3>
            </div>
        
            <p className='text-[14px] font-normal'>Obtén un plan de entrenamiento a medida con el apoyo de nuestros entrenadores personales. Diseñaremos un programa adaptado a tus objetivos y necesidades específicas, asegurando que cada sesión sea efectiva y motivadora.</p>
        </div>

        <div className='w-[90%] text-white bg-[#1F2125] border border-[#949494] rounded-[20px] p-[18px] flex flex-col gap-3' >
            <div className='flex flex-col gap-7'>
            <Image
              src="https://res.cloudinary.com/df5rqpdzh/image/upload/v1726371584/bicicleta_k5bt6q.svg"
              
              alt="Programa 2"
              width={50}
              height={50}
            />
            <h3 className='text-[18px] font-bold'>Spinning</h3>
            </div>
        
            <p className='text-[14px] font-normal'>Súbete a la bicicleta y únete a nuestras dinámicas clases de Spinning. Diseñadas para mejorar tu resistencia cardiovascular y quemar calorías, estas sesiones de alta energía te motivarán a alcanzar nuevos niveles de fitness. Ideal para todos los niveles de experiencia.</p>
        </div>

        <div className='w-[90%] text-white bg-[#1F2125] border border-[#949494] rounded-[20px] p-[18px] flex flex-col gap-3' >
            <div className='flex flex-col gap-7'>
            <Image
              src="https://res.cloudinary.com/df5rqpdzh/image/upload/v1726371584/aerobicos_riemjp.svg"
              alt="Programa 3"
              width={50}
              height={50}
            />
            <h3 className='text-[18px] font-bold'>Aeróbicos</h3>
            </div>
        
            <p className='text-[14px] font-normal'>Disfruta de nuestras clases de aeróbicos llenas de energía, donde podrás mejorar tu resistencia cardiovascular, quemar calorías y tonificar tu cuerpo.  estas sesiones son perfectas para todos los niveles y te ayudarán a mantenerte en forma mientras te diviertes.</p>
        </div>

        

      </div>
    </div>
  )
}

export default Program
