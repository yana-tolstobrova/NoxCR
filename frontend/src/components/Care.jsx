import React from 'react';
import careData from '../data/dataCareProducts';

function Care() {
  return (
    <div data-testid="care-component" className="mx-auto max-w-screen-xl px-4">
      <div className="flex justify-center space-x-6 m-10">
        {careData.map((care, index) => (
          <div key={index} className="bg-white p-4 pt-0 rounded-lg w-1/3"  data-testid={`care-item-${index}`}>
            <div className="flex justify-center mb-4">
              <img
                src={require(`../assets/${care.img}`)}
                alt="Imagen de cuidados"
                className="w-36 h-36 object-cover rounded-full mb-2"
              />
            </div>
            <p className="text-left text-base mb-2" style= {{color:"#575757"}}>{care.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Care;




// import React from 'react';
// import careData from '../data/dataCareProducts';

// function Care() {
//   return (
//     <div data-testid="care-component" className="mx-auto max-w-screen-xl px-4">
//       <div className="flex justify-center m-10 overflow-x-auto">
//         <div className="flex">
//           {careData.map((care, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 pt-0 rounded-lg w-full sm:w-auto"
//               style={{ flex: "0 0 100%" }}
//               data-testid={`care-item-${index}`}
//             >
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={require(`../assets/${care.img}`)}
//                   alt="Imagen de cuidados"
//                   className="w-36 h-36 object-cover rounded-full mb-2"
//                 />
//               </div>
//               <p className="text-left text-base mb-2" style={{ color: "#575757" }}>{care.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Care;



// import React from 'react';
// import careData from '../data/dataCareProducts';

// function Care() {
//   return (
//     <div data-testid="care-component" className="mx-auto max-w-screen-xl px-4">
//       <div className="flex justify-center space-x-6 m-10 flex-wrap">
//         {careData.map((care, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 pt-0 rounded-lg w-full sm:w-1/3"
//             data-testid={`care-item-${index}`}
//           >
//             <div className="flex justify-center mb-4">
//               <img
//                 src={require(`../assets/${care.img}`)}
//                 alt="Imagen de cuidados"
//                 className="w-36 h-36 object-cover rounded-full mb-2"
//               />
//             </div>
//             <p className="text-left text-base mb-2" style={{ color: "#575757" }}>{care.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Care;
