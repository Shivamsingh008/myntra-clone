import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import Navbar from "../Navbar";


const Login = ()=>  {

const [phone , setPhone] = useState("")

  return (
    <>
    <Navbar/>
    <div className="bg-rose-50 h-screen flex flex-col justify-center items-center">
      <div className="h-72 w-96 aspect-auto bg-white flex flex-col justify-center items-center">
        <h1 className="font-bold text-lg">
          {" "}
          Login <span className="font-normal text-sm">or</span> Signup{" "}
        </h1>
        <div className="mt-5">
        <PhoneInput 
            country={"us"}
          value={phone}
          onChange={(phone) => setPhone( phone )}
          placeholder="Moblie Number"
          buttonStyle={{backgroundColor: "white"}} 
            inputStyle={{width:"320px"}}
          />
        </div>
        
          <h1 className="mt-4 text-xs text-gray-400">By clicking continue, you can <span className="text-rose-500 font-bold"> login to this myntra-clone </span> </h1>
          <button class="mt-4 bg-rose-500 hover:bg-rose-700 text-white font-bold w-80 py-2 px-4 text-sm">
  CONTINUE
</button>
<h1 className="mt-4 text-xs text-gray-400">Have trouble loggin ?<span className="text-rose-500 font-bold"> Click continue </span> </h1>
      </div>
    </div>
    </>
  );
}

export default Login;
