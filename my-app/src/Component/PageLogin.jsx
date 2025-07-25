export default function PageLogin() {
  return (
    <div className="h-screen">
      <div className="w-fit mx-auto ">
        <p className=" py-5 font-bold text-4xl text-center">Log in to ph</p>
        <div>
          <img className=" w-100" src="Logo.png" alt="" />
          <div className="text-center py-5">
            <div className="pb-5">
              <input
                className="border w-85 rounded-xl h-9 pl-2"
                placeholder="Email"
              ></input>
            </div>
            <div className="pb-5">
              <input
                className="border w-85 rounded-xl h-9 pl-2"
                placeholder="Password"
              ></input>
            </div>
            <p className='text-purple-500 text-body pb-5'>Forgot your password?</p>
            <button className="w-85 rounded-xl h-9 pl-2 bg-purple-500 font-bold">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
