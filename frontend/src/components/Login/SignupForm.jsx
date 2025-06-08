// SignupForm.jsx
// import React, { useState } from "react";
import api from "./backendRouting.js";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const SignupForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target);
    if (e.target.name === "image") {
      setData({ ...data, [e.target.name]: e.target.files[0] });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("password",data.password);
      formData.append("image", data.image);
      const inputfield = data.email;
      const isphone = /^(0-9){10}$/.test(inputfield);
      if (isphone) {
        formData.append("phone", inputfield);
      } else {
        formData.append("email", inputfield);
      }
      const dataa = await axios.post(api.signup.url, formData);
      console.log(dataa, "dattttaaa");
      if(dataa.data.status===200){
        toast.success(dataa.data.message)
      }
      else{
        toast.error(dataa.data.message)
      }
    } catch (error) {
      console.log(error, "error occured in handleSubmit ");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="login-popup-inputs">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Your email"
          required
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={data.password}
          onChange={handleChange}
        />
        <input type="file" name="image"  onChange={handleChange} />
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
};

export default SignupForm;
