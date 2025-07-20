import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [Menuonclick, setMenuonclick] = useState(false);

  return (
    <div className="relative z-30">
      <div className="w-full lg:max-w-screen-2xl justify-between mx-auto flex items-center z-20 py-1 px-4">
        {/* Logo + Navbar */}
        <div className="flex gap-5 items-center">
          <Link to={"/"}>
            <img className="w-[55px]" src="/Logo.png" alt="Logo" />
          </Link>

          {/* Navbar Desktop */}
          <div className="hidden md:block">
            <div className="flex gap-5">
              <div className="cursor-pointer">
                <Link to={"/share"}>หุ้น</Link>
              </div>
              <div className="cursor-pointer">
                <Link to={"/ETF"}>ETF</Link>
              </div>
              <div className="cursor-pointer">
                <Link to={"/Gold"}>ทอง</Link>
              </div>
              <div className="cursor-pointer">
                <Link to={"/Crypto"}>Crypto</Link>
              </div>
              <div className="cursor-pointer">
                <Link to={"/ข่าว"}>ข่าว</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Search + Login + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="border border-purple-500 lg:w-75 p-1 pl-2 rounded-xl"
            placeholder="ค้นหา..."
          />
          <div className="border border-purple-500 p-1 px-2 rounded-xl cursor-pointer">
            <p>Login</p>
          </div>

          {/* Menu toggle on mobile */}
          <div className="md:hidden">
            {Menuonclick ? (
              <IoMdClose onClick={() => setMenuonclick(false)} size={30} />
            ) : (
              <IoMdMenu onClick={() => setMenuonclick(true)} size={30} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Data */}
      <div
        className={`md:hidden absolute z-20 w-full rounded-b-4xl h-fit bg-black duration-300 transition-all ease-in-out ${
          Menuonclick ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full h-full">
          <ul className="py-1 text-xl text-center text-white">
            <li className="p-3">
              <Link to={"/share"}>หุ้น</Link>
            </li>
            <li className="p-3">
              <Link to={"/ETF"}>ETF</Link>
            </li>
            <li className="p-3">
              <Link to={"/Gold"}>ทอง</Link>
            </li>
            <li className="p-3">
              <Link to={"/Crypto"}>Crypto</Link>
            </li>
            <li className="p-3">
              <Link to={"/ข่าว"}>ข่าว</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
