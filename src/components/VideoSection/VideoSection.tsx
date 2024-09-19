// "use client"
// import { useState } from 'react';
// import Image from 'next/image';
// const VideoSection = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleModalToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className='mx-5 my-4 '>
//       {/* Portada del video */}
//       <div className="relative w-full h-64 bg-gray-800 cursor-pointer " onClick={handleModalToggle}>
//         <img 
//           src="https://res.cloudinary.com/df5rqpdzh/image/upload/v1723394853/Rectangle_9567_f8qji6.svg" 
//           alt="Video Thumbnail" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
//           <button className="bg-red-600  text-white p-2 rounded-full">
//           <Image
//               src="https://res.cloudinary.com/df5rqpdzh/image/upload/v1726455480/Play_krykpm.svg"
//               alt="PLAY"
//               width={40}
//               height={40}
//             />
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
//           <div className="relative bg-[#393939] rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-4">
//             {/* Botón para cerrar */}
//             <button 
//               onClick={handleModalToggle} 
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//             >
//               ✖
//             </button>
//             {/* Título */}
//             <h2 className="text-xl font-bold mb-4 text-center">Título del Video</h2>
//             {/* Video */}
//             <div className="aspect-w-16 aspect-h-9  ">
//               <iframe
//                 className="w-full h-full rounded-3xl"
//                 src="https://res.cloudinary.com/df5rqpdzh/video/upload/v1723394648/ASTROSGYM_VIDEOCLIP_Hecho_con_Clipchamp_adpwrh.mp4"
//                 title="YouTube video"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoSection;
"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './VideoSection.module.css'; // Asegúrate de tener este archivo

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mx-5 my-4'>
      {/* Portada del video */}
      <div className={`relative w-full max-w-[800px] mx-auto h-64 sm:h-80 md:h-[400px] lg:h-[500px] bg-gray-700 cursor-pointer rounded-xl overflow-hidden ${styles.gradientBorder}`} onClick={handleModalToggle}>
        <img 
          src="https://res.cloudinary.com/df5rqpdzh/image/upload/v1723394853/Rectangle_9567_f8qji6.svg" 
          alt="Video Thumbnail" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-xl">
          <button className="bg-red-600 text-white p-3 rounded-full">
            <Image
              src="https://res.cloudinary.com/df5rqpdzh/image/upload/v1726455480/Play_krykpm.svg"
              alt="PLAY"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-[#ffffff] rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 p-4">
            {/* Botón para cerrar */}
            <button 
              onClick={handleModalToggle} 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✖
            </button>
            {/* Título */}
            <h2 className="mb-4 text-center text-[#000000]">Gimnasios Astros Gym 💪</h2>
            {/* Video */}
            <div className="relative w-full h-0 pb-[56.25%]"> {/* Aspect ratio 16:9 */}
              <iframe
                className="absolute inset-0 w-full h-full rounded-3xl"
                src="https://res.cloudinary.com/df5rqpdzh/video/upload/v1723394648/ASTROSGYM_VIDEOCLIP_Hecho_con_Clipchamp_adpwrh.mp4"
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
