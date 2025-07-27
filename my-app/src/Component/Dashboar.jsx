import Sizebar from "./Sizebar";
import Mydbpor from "../../data/mydb.pot.json";

export default function Dashboar() {
  return (
    <div className="flex">
      <Sizebar />
      <div className=" p-5 w-full">
        <div className="grid lg:grid-cols-8 grid-cols-1 gap-5 p-5 lg:w-400 mx-auto  ">
          {Mydbpor.map((event, index) => {
            return (
              <div
                className={` border p-5 h-45 rounded-xl ${
                  ["NVDA", "AAPL", "MSFT", "GOOGL", "TSM", "BTC"].includes(
                    event.ID
                  )
                    ? "col-span-2"
                    : ""
                }`}
              >
                <div className="flex justify-between">
                  <p className="font-black text-sm"> {event.ID}</p>
                  <img src={event.Image} className="w-12 pl-5" alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// {data.map((item, index) => (
//             <div
//               key={index}
//               className={`border p-3 text-center ${
//                 [1, 2].includes(index) ? "col-span-2" : ""
//               }`}
//             >
//               {item.cod}
//             </div>
//           ))}
