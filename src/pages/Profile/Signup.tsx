import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orgName, setOrgName] = useState("");
  const [typeOfOrg, setTypeOfOrg] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street1, setStreet1] = useState("");
  const [street2, setStreet2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  const onSubmitform = (e) => {
    e.preventDefault();
    const adminData = {
      email,
      password,
      orgName,
      typeOfOrg,
      phoneNumber,
      street1,
      street2,
      city,
      country,
      zipCode,
    };
    console.log(
      "data",
      email,
      password,
      orgName,
      typeOfOrg,
      phoneNumber,
      street1,
      street2,
      city,
      country,
      zipCode
    );

    fetch("http://localhost:4011/auth/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(adminData),
    })
      .then(async (res) => {
        let result = await res.text();
        console.log(result);
        alert(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className=" flex justify-center">
        <div className="lg:w-[950px] sm:w-[300px] h-auto ml-6 border-r border-l border-t border-b rounded-[10px] border-gray-400 mb-6">
          <div className="text-center font-bold py-8 text-[28px]">SignUp</div>
          <form onSubmit={(e) => onSubmitform(e)}>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-flow-row">
              <div className="pl-[40px]  mt-3">
                <label className="text-[16px]">Email</label>
                <br />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="lg:w-[250px] sm:w-[300px]  mt-2 py-[6px] border rounded-[6px] border-gray-700"
                />
              </div>
              <div className="pl-[40px]  mt-3">
                <label className="text-[16px]">password</label>
                <br />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="lg:w-[250px] sm:w-[300px]  mt-2 py-[6px] border rounded-[6px] border-gray-700"
                />
              </div>
              <div className="pl-[40px]  mt-3">
                <label className="text-[16px]">orgName</label>
                <br />
                <input
                  type="text"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="lg:w-[250px] sm:w-[300px]  mt-2 py-[6px] border rounded-[6px] border-gray-700"
                />
              </div>
              <div className="pl-[40px]  mt-3">
                <label className="text-[16px]">typeOfOrg</label>
                <br />
                <input
                  type="text"
                  value={typeOfOrg}
                  onChange={(e) => setTypeOfOrg(e.target.value)}
                  className="lg:w-[250px] sm:w-[300px]  mt-2 py-[6px] border rounded-[6px] border-gray-700"
                />
              </div>
              <div className="pl-[40px]  mt-3">
                <label className="text-[16px]">phoneNumber</label>
                <br />
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="lg:w-[250px] sm:w-[300px]  mt-2 py-[6px] border rounded-[6px] border-gray-700"
                />
              </div>
              <div className="pl-[40px]  mt-3">
                <label className="text-[16px]">street1</label>
                <br />
                <input
                  type="text"
                  value={street1}
                  onChange={(e) => setStreet1(e.target.value)}
                  className="lg:w-[250px] sm:w-[300px]  mt-2 py-[6px] border rounded-[6px] border-gray-700"
                />
              </div>
              <div className="pl-[40px]  mt-3">
                <label className="text-[16px]">street2</label>
                <br />
                <input
                  type="text"
                  value={street2}
                  onChange={(e) => setStreet2(e.target.value)}
                  className="lg:w-[250px] sm:w-[300px]  mt-2 py-[6px] border rounded-[6px] border-gray-700"
                />
              </div>
              <div className="pl-[40px]  mt-3">
                <label className="text-[16px]">city</label>
                <br />
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="lg:w-[250px] sm:w-[300px]  mt-2 py-[6px] border rounded-[6px] border-gray-700"
                />
              </div>
              <div className="pl-[40px]  mt-3">
                <label className="text-[16px]">country</label>
                <br />
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="lg:w-[250px] sm:w-[300px]  mt-2 py-[6px] border rounded-[6px] border-gray-700"
                />
              </div>
              <div className="pl-[40px]  mt-3">
                <label className="text-[16px]">zipCode</label>
                <br />
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="lg:w-[250px] sm:w-[300px]  mt-2 py-[6px] border rounded-[6px] border-gray-700"
                />
              </div>
            </div>
            <div className="my-6 flex justify-center">
              <input
                type="submit"
                className="mt-2 py-[6px] border rounded-full bg-[#7451f8] text-white w-[200px]"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
