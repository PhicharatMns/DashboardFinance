import { useState } from "react";
import Navbar from "./Component/Navbar";
import Sizebar from "./Component/Sizebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import ProductHome from "./Component/ProductHome";
import Pageshare from "./Component/pageshare";
import PageETF from "./Component/PageETF";
import PageGole from "./Component/PageGold";
import PageCrypo from "./Component/PageCrypo";
import Pageข่าว from "./Component/Pageข่าว";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white  ">
        {/* Navbar */}
        <Navbar />
        {/* Sizebar */}
        <div className="flex">
          {/* <Sizebar /> */}
          {/* Headaer:text */}
          <div className="flex-1">
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sldes/:id" element={<ProductHome />} />
                <Route path="/share" element={<Pageshare />} />
                <Route path="/ETF" element={<PageETF />} />
                <Route path="/Gold" element={<PageGole />} />
                <Route path="/Crypto" element={<PageCrypo />} />
                <Route path="/ข่าว" element={<Pageข่าว />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
