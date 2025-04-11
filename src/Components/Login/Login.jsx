import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [apiData, setApiData] = useState([]);

  // 1.
  useEffect(() => {
    axios
      .get("http://localhost:3000/api")
      .then((response) => {
        setApiData(response.data);
        console.log(apiData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // 2.
  useEffect(() => {
    console.log(apiData);
  }, [apiData]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if ("email" == name) {
      setEmail(value);
    }
    if ("password" == name) {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email == "" || password == "") {
      alert("please enter Details");
    } else {
      let getDetails = JSON.parse(localStorage.getItem("user"));
      console.log(getDetails);
      getDetails.map((curValue) => {
        console.log(curValue);
        console.log(curValue.email);
        console.log(curValue.password);

        const user = apiData.find(
          (user) => user.email === email && user.password === password
        );

        if (user) {
          navigate("/teacher");
        } else {
          setMsg("Invalid email or password");
        }
      });
    }
  };
  return (
    <div>
      <p className="flex justify-center text-2xl">{msg}</p>
      <div className="  flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
          <p className="flex justify-center text-2xl">{msg}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center text-2xl font-bold text-gray-700">
              Log In
            </div>

            <div className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleInput}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleInput}
              />
            </div>

            <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
