import { elements } from "chart.js";
import { use, useState } from "react";
import { useNavigate } from "react-router-dom"; //ใช้สําหรับเข้าถึง Roter one

export default function PageLogin() {
  const [Email, setEmail] = useState("Beer");
  const [Password, setPassword] = useState("12345");
  const navigate = useNavigate(); //ต้องดึง useNavigate มาใช้
  const [error, setError] = useState("");

  const check = () => {
    if (Email === "Beer" && Password === "12345") {
      navigate("/Dashboar");
    } else {
      setError("ไม่ผ่านระบบ");
    }
  };

  return (
    <div className="h-screen">
      <div className="w-fit mx-auto ">
        <p className=" py-5 font-bold text-4xl text-center">Log in to ph</p>
        <div>
          <img className=" w-100" src="Logo.png" alt="" />
          <div className="text-center py-5">
            <div className="pb-5">
              <input
                type="email"
                value={Email}
                onChange={(element) => setEmail(element.target.value)}
                className="border w-85 rounded-xl h-9 pl-2"
                placeholder="Email"
              ></input>
            </div>
            <div className="pb-5">
              <input
                type="password"
                onChange={(elements) => setPassword(elements.target.value)}
                value={Password}
                className="border w-85 rounded-xl h-9 pl-2"
                placeholder="Password"
              ></input>
            </div>
            <div>
              {" "}
              <span className="text-purple-500 text-body pb-5 cursor-pointer">
                Forgot your password?
              </span>
            </div>
            <button
              onClick={check}
              className="w-85 rounded-xl h-9 pl-2 mt-5 bg-purple-500 font-bold cursor-pointer"
            >
              Login
            </button>
            {error && (
              <p className="mt-4 text-sm font-medium text-center text-red-500">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
