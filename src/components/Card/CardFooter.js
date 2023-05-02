import React from "react";
import { Link } from "react-router-dom";
//  function getSubtitles(item, windowSize) {
//    if (windowSize < 768) {
//      return (
//        <div className="mx-auto">
//          <div className="flex-row justify-between items-center mx-5 my-5">
//            <h3
//              className="font-bold text-[#838383] text-left text-md w-full"
//              style={{
//                borderBottom: "0.5px solid #838383",
//                paddingBottom: "7px",
//                width: "10rem",
//                marginBottom: "10px",
//              }}
//            >
//              {item.title}
//            </h3>
//            {item.subtitles.map((par) => (
//              <Link to={par.url}>
//                <p className="max-w-lg leading-normal  text-white ">
//                  {par.subtitle}
//                </p>
//              </Link>
//            ))}
//          </div>
//        </div>
//      );
//    }
//   }
   export default function CardFooter({ item }) {
   return (
     <div className="mx-auto">
       <div className="flex-row justify-between w-full items-center mx-5 my-5 ">
         <h3
           className="w-full font-bold text-[#838383] lg:w-[10rem] text-left text-md lg:max-w-sm"
           style={{
             borderBottom: "0.5px solid #838383",
             paddingBottom: "7px",
             marginBottom: "10px",
           }}
         >
           {item.title}
         </h3>

         <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-0">
           {item.subtitles.map((par, index) => (
             <Link to={par.url}>
               <p className="max-w-lg leading-normal text-sm font-light  text-white ">
                 {par.subtitle}
               </p>
             </Link>
           ))}
         </div>
       </div>
     </div>
   );
 }
