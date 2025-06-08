// import React, { useState } from "react";
import api from "./backendRouting";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import cookie from "js-cookie"

const LoginForm = () => {
  const [data, setData] = useState("");
  const handleChange = (e) => {
    console.log(e.target);
    setData({ ...data, [e.target.name]:e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataa = await axios.post(api.login.url, data);
      console.log(dataa, "datatata");
if(dataa.data.status===200){
  toast.success(dataa.data.message)
   cookie.set("userInfo",JSON.stringify(dataa.data.body))
}
else{
  toast.error(dataa.data.message)
}
    } catch (error) {
      console.log(error, "errrror inn handlsubmit");
      toast.error(error)
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="login-popup-inputs">
          <input
            type="name"
            name="name"
            placeholder="Your Name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email or phone"
            value={data.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default LoginForm;
