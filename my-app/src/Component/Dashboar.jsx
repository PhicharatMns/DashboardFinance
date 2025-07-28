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
                  <img src={event.Image} className="w-10 pb-5" alt="" />
                  <p
                    className={`${
                      event.percentage > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {event.percentage}
                  </p>
                </div>
                {/* price */}
                <div className="">
                  <p className="font-black text-sm pb-3"> {event.ID}</p>
                  <p className="font-bold">${event.price}</p>
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
