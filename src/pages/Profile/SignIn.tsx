import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitform = (e: any) => {
    e.preventDefault();
    const loginData = { email, password };
    fetch("http://localhost:4011/api/v1/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then(async (res) => {
        let result = await res.json();
        console.log(result);
        if (!result["error"]) {
          alert(result["message"]);
          navigate('/root')
        } else {
          alert(result["error"]);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className=" flex justify-center items-center" >
      <div className="lg:w-[510px] sm:w-[300px] h-auto ml-6 border-r border-l border-t border-b rounded-[10px] border-gray-400 mb-6 mt-6">
        <div className="text-center font-bold py-8 text-[28px]">Login</div>
        <form onSubmit={(e) => onSubmitform(e)}>
          <div className="pl-[50px]  mt-3">
            <label className="text-[16px]">Enter Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="lg:w-[410px] sm:w-[300px]  mt-2 py-[6px] border rounded-[6px] border-gray-700"
            />
          </div>
          <div className="pl-[50px]  mt-3">
            <label className="text-[16px]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="lg:w-[410px] sm:w-[300px]  mt-2 py-[6px] border rounded-[6px] border-gray-700"
            />
          </div>
          <div className="my-6 flex justify-center">
            <input
              type="submit"
              className="mt-2 py-[6px] border rounded-full bg-[#7451f8] text-white w-[200px]"
            />
          </div>
        </form>
        <div className="text-center">
          If you don't have account please
          <Link to="/signup" className="text-indigo-500 ml-2">
            signup?
          </Link>
        </div>
      </div>
    </div>
  );
}
