// import { useState } from "react";
// import { AiOutlineCaretRight } from "react-icons/ai";
// import { AiOutlineAreaChart } from "react-icons/ai";
// import { AiOutlineControl } from "react-icons/ai";
// import { AiOutlineSketch } from "react-icons/ai";
// export default function Sizebar() {
//   const datasizebar = [
//     { text: "หุ้นในพอต", icons: AiOutlineSketch },
//     { text: "กราฟเเละกําไร", icons: AiOutlineAreaChart },
//     { text: "จัดพอตใหม่", icons: AiOutlineControl },
//   ];

//   const [onClickSizebar, setonClickSizebar] = useState(true);

//   return (
//     <div className="h-screen">
//       <div
//         className={` h-full border-r border-purple-500 transition-all duration-300 ${
//           onClickSizebar ? "w-64" : "w-16"
//         }`}
//       >
//         {/* Head Sizebar */}
//         {/* whitespace-nowrap ทําให้ล๊อคไม่ให้ ขยับ */}
//         <div className=" flex items-center py-3 p-4">
//           <span
//             className={`uppercase mx-auto text-2xl font-black border-b whitespace-nowrap  ${
//               onClickSizebar ? "opacity-100 w-auto" : "opacity-0 w-0"
//             }`}
//           >
//             Size bar
//           </span>

//           <button className="  z-10">
//             <AiOutlineCaretRight
//               size={30}
//               onClick={() => setonClickSizebar(!onClickSizebar)}
//             />
//           </button>
//         </div>
//         {/* Menu */}
//         <div className="mt-4 flex flex-col gap-2">
//           {datasizebar.map((item, index) => {
//             const Icon = item.icons;
//             return (
//               <div
//                 key={index}
//                 className="flex items-center gap-3 px-4 py-2 hover:bg-purple-700 transition-colors"
//               >
//                 <div className="min-w-[30px] flex justify-center">
//                   <Icon size={24} />
//                 </div>
//                 <span
//                   className={`transition-all duration-300 whitespace-nowrap ${
//                     onClickSizebar ? "opacity-100 w-auto" : "opacity-0 w-0 "
//                   }`}
//                 >
//                   {item.text}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { AiOutlineAreaChart } from "react-icons/ai";
import { AiOutlineControl } from "react-icons/ai";
import { AiOutlineSketch } from "react-icons/ai";
export default function Sizebar() {
  const datasizebar = [
    { text: "หุ้นในพอต", icons: AiOutlineSketch },
    { text: "กราฟเเละกําไร", icons: AiOutlineAreaChart },
    { text: "จัดพอตใหม่", icons: AiOutlineControl },
  ];

  const [onClickSizebar, setonClickSizebar] = useState(true);

  return (
    <div
      className={`h-screen border-r border-purple-500 transition-all duration-300  ${
        onClickSizebar ? "w-64" : "w-16"
      }`}
    >
      {/* headerSizebar */}
      <div className="flex items-center py-3 p-4">
        <span
          className={`uppercase mx-auto text-2xl font-black border-b whitespace-nowrap ${
            onClickSizebar ? "opacity-100 w-auto" : "opacity-0 w-0"
          }`}
        >
          Size bar
        </span>
        <button className=' relative'>
          <AiOutlineCaretRight
            onClick={() => setonClickSizebar(!onClickSizebar)}
            size={30}
          />
        </button>
      </div>
      {/* menuSizeBar */}
      <div className="mt-4">
        {datasizebar.map((event, index) => {
          const Icons = event.icons;
          return (
            <div className="flex items-center py-3 p-4 text-lg gap-5">
              {/* Icon */}
              <div className="min-w-[30px] flex justify-center">
                <Icons size={24} />
              </div>
              {/* text */}
              <span
                className={`whitespace-nowrap ${
                  onClickSizebar ? "opacity-100 w-auto" : "opacity-0 w-0"
                }`}
              >
                {event.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
