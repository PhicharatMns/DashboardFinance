import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import sldes from "../../data/sldes";
import { Link } from "react-router-dom";

export default function Home() {
  const [current, setcurrent] = useState(1);
  const prevtoslde = () => {
    const isPrevSlid = current === 0;
    const newIndexSlide = isPrevSlid ? sldes.length - 1 : current - 1;
    setcurrent(newIndexSlide);
  };

  const nexttoslde = () => {
    const isNextSlde = current === sldes.length - 1;
    const newIndex = isNextSlde ? 0 : current + 1;
    setcurrent(newIndex);
  };

  return (
    <div className="h-ful py-5 p-4 ">
      <div className=" max-w-[1500px] mx-auto">
        {/* {" show text "} */}
        <div className="border relative">
          <div
            className="h-150  border-purple-500 bg-cover bg-center relative duration-500"
            // show slide
            style={{ backgroundImage: `url(${sldes[current].url})` }}
          >
            <div className="absolute bottom-5 left-10 bg-black/60 text-white p-2 rounded">
              {sldes[current].title}
            </div>
            <button
              onClick={prevtoslde}
              className="absolute top-[50%] left-5 cursor-pointer z-10 hover:text-black hover:bg-purple-500/60 duration-300  bg-white/30  border rounded-3xl p-2"
            >
              <AiOutlineArrowLeft size={30} />
            </button>

            <button
              onClick={nexttoslde}
              className="absolute top-[50%] right-5 z-10 cursor-pointer hover:text-black hover:bg-purple-500/60 duration-300 bg-white/30 border rounded-3xl p-2"
            >
              <AiOutlineArrowRight size={30} />
            </button>
          </div>
        </div>
        {/* img gap 3 */}
        <div className="grid grid-cols-3 gap-3 w-full h-full pt-5">
          {sldes.map((event, index) => {
            return (
              <Link to={`/sldes/${event.id}`} key={index}>
                <img
                  src={event.url}
                  className="w-full h-full object-cover rounded-xl"
                  alt=""
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
