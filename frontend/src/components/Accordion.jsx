// import React, { useState } from 'react';
// import arrowCarousel from '../assets/arrow-carousel.svg'
// import arrow from '../assets/arrow.svg'
// import pdfCare from '../assets/pdf-docs/cuidados-noxcr.pdf'
// import eyeAccordion from '../assets/eye-acordeon.svg'

// function Accordion(props) {
//   const [openItemIndex, setOpenItemIndex] = useState(null);

//   const toggleItem = (index) => {
//     if (index === openItemIndex) {
//       setOpenItemIndex(null);
//     } else {
//       setOpenItemIndex(index);
//     }
//   };
//   const customStyles = props.customStyles || {};

//   return (
//     <div className="bg-black flex flex-col items-center text-white" style={{ padding: '70px 120px 100px 120px', ...customStyles }}>
//     <h1 className="text-2xl pl-28 w-full text-start font-semibold mb-8" id="faq">Preguntas frecuentes</h1>
//     <div className="text-black w-10/12 rounded flex flex-col gap-2">
//       {props.accordionItems.map((item, index) => (
//         <div
//           key={index}
//           className="bg-white border border-gray-300 rounded"
//         >
//           <div
//             className="p-2 cursor-pointer flex justify-between items-center"
//             onClick={() => toggleItem(index)}

//           >
//             <h2 className="text-lg font-medium">{item.title}</h2>
//             {/* <span className={`transform transition-transform ${index === openItemIndex ? 'rotate-180' : ''} `}> */}
//                 {/* <img className="p-2" src={arrowCarousel} alt="icono arrow carousel" /> */}

//                 <span className={` ${index !== openItemIndex ? 'animate-bounce' : ''} `} >
//                 <img className="w-10 md:w-6"src={eyeAccordion} alt="ojo de apertura"  />
//             </span>
//           </div>
//           {index === openItemIndex && (
//             <div className="py-8 px-8 bg-gray-100">
//               <p>{item.content}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//     {props.showDownloadLink && (
//     <div className="flex justify-end items-end w-full pr-28 text-white py-6" style={{ color: '#EBEBEB' }}> 
//         <a
//           href={pdfCare}
//           target="_blank" rel="noopener noreferrer"
//           download= "cuidados-noxcr.pdf" 
//           className="flex items-end text-400"
//         >
//           Descargar PDF
//           <img className="px-2" src={arrow} alt="icono arrow" />
//         </a>
//       </div>
//       )}
//     </div>
//   );
// }

// export default Accordion;



// import React, { useState } from 'react';
// import arrowCarousel from '../assets/arrow-carousel.svg'
// import arrow from '../assets/arrow.svg'
// import pdfCare from '../assets/pdf-docs/cuidados-noxcr.pdf'
// import eyeAccordion from '../assets/eye-acordeon.svg'

// function Accordion(props) {
//   const [openItemIndex, setOpenItemIndex] = useState(null);

//   const toggleItem = (index) => {
//     if (index === openItemIndex) {
//       setOpenItemIndex(null);
//     } else {
//       setOpenItemIndex(index);
//     }
//   };
//   const customStyles = props.customStyles || {};

//   return (
//     <div className="bg-black flex flex-col items-center text-white pt-8" style={{...customStyles }}>
//       <h1 className="text-2xl pl-28 w-full text-start font-semibold mb-8" id="faq">Preguntas frecuentes</h1>
//       <div className="text-black w-10/12 rounded flex flex-col gap-2">
//         {props.accordionItems.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-300 rounded" 
//           >
//             <div
//               className="p-2 cursor-pointer flex justify-between items-center"
//               onClick={() => toggleItem(index)}
//             >
//               <h2 className="text-lg font-medium">{item.title}</h2>
//               <span className={`${index !== openItemIndex ? 'animate-bounce' : ''}`}>
//                 <img className="w-8 md:w-12" src={eyeAccordion} alt="ojo de apertura" />
//               </span>
//             </div>
//             {index === openItemIndex && (
//               <div className="py-8 px-8 bg-gray-100">
//                 <p>{item.content}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       {props.showDownloadLink && (
//         <div className="flex justify-end items-end w-full pr-28 text-white py-6" style={{ color: '#EBEBEB' }}>
//           <a
//             href={pdfCare}
//             target="_blank"
//             rel="noopener noreferrer"
//             download="cuidados-noxcr.pdf"
//             className="flex items-end text-400"
//           >
//             Descargar PDF
//             <img className="px-2" src={arrow} alt="icono arrow" />
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Accordion;














import React, { useState } from 'react';
import arrowCarousel from '../assets/arrow-carousel.svg'
import arrow from '../assets/arrow.svg'
import pdfCare from '../assets/pdf-docs/cuidados-noxcr.pdf'
import eyeAccordion from '../assets/eye-acordeon.svg'

function Accordion(props) {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const toggleItem = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(null);
    } else {
      setOpenItemIndex(index);
    }
  };
  const customStyles = props.customStyles || {};

  return (
    <div className="bg-black flex flex-col items-center text-white pt-8" style={{ ...customStyles }}>
      <h1 className="text-2xl pl-28 w-full text-start font-semibold mb-8" id="faq">Preguntas frecuentes</h1>
      <div className="text-black w-10/12 rounded flex flex-col gap-2">
        {props.accordionItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded"
          >
            <div
              className="p-2 cursor-pointer flex justify-between items-center"
              onClick={() => toggleItem(index)}
            >
              <h2 className="text-lg font-medium w-3/4">{item.title}</h2>

              {/* <span className={`transform transition-transform ${index === openItemIndex ? 'rotate-180' : ''} `}> */}
               {/* <img className="p-2" src={arrowCarousel} alt="icono arrow carousel" /> */}
               
              <span className={`flex flex-row-reverse ${index !== openItemIndex ? 'animate-bounce' : ''} w-1/4`}>
                <img className="w-8 h-8 md:w-12" src={eyeAccordion} alt="ojo de apertura" />
            </span>
            </div>
            {index === openItemIndex && (
              <div className="py-8 px-8 bg-gray-100">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {props.showDownloadLink && (
        <div className="flex justify-end items-end w-full pr-28 text-white py-6" style={{ color: '#EBEBEB' }}>
          <a
            href={pdfCare}
            target="_blank"
            rel="noopener noreferrer"
            download="cuidados-noxcr.pdf"
            className="flex items-end text-400"
          >
            Descargar PDF
            <img className="px-2" src={arrow} alt="icono arrow" />
          </a>
        </div>
      )}
    </div>
  );
}

export default Accordion;
