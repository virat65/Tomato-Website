// import React, { useState } from "react";
// import { assets } from "../../../assets/frontend_assets/assets";
// import "./Login.css";
// import axios from "axios";
// import api from "./backendRouting";
// const Login = ({ setShowLogin }) => {
//   const [currentState, setCurrentState] = useState("Login");
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     image: "",
//     password: "",
//   }); // Change from string to object
//   const handleChange = (e) => {
//     console.log("Input type:", e.target.type); // This will log the type of the input
//     const { name, value, type, files } = e.target;
//     if (type === "file") {
//       setData({ ...data, [name]: files[0] });
//     } else {
//       setData({ ...data, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login/signup logic here
//     console.log("Form submitted:", data);
//     try {
//       const formData = new FormData(); //creates a new FormData object in JavaScript.
//       formData.append("image", data.image);
//       formData.append("name", data.name);

//       formData.append("email", data.email);

//       formData.append("password", data.password);
//       formData.append("image", data.phone);
//       console.log(formData,"formdatttttaaa");
//    const apiUrl = currentState === "Login" ? api.login.url : api.signup.url;
//     } catch (error) {
//       console.log(error, "errrrorrrr in handlesubmit");
//     }
//   };
//   return (
//     <div className="login-popup">
//       <form className="login-popup-container" onSubmit={handleSubmit}>
//         <div className="login-popup-title">
//           <h2>{currentState}</h2>
//           <img
//             onClick={() => setShowLogin(false)}
//             src={assets.cross_icon}
//             alt=""
//           />
//         </div>
//         <div className="login-popup-inputs">
//           {currentState === "Login" ? (
//             ""
//           ) : (
//             <input
//               type="text"
//               placeholder="Your Name"
//               name="name"
//               onChange={handleChange}
//               required
//             />
//           )}

//           <input
//             type="email"
//             placeholder="Your email"
//             name="email"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">
//           {currentState === "SignUp" ? "Create Account" : "Login"}
//         </button>
//         <div className="login-popup-condition">
//           <input type="checkbox" required />
//           <p>By continuing, i agree to the terms of use & privacy policy. </p>
//         </div>
//         {currentState === "Login" ? (
//           <p>
//             Create Account?{" "}
//             <span onClick={() => setCurrentState("SignUp")}>Signup here </span>
//           </p>
//         ) : (
//           <p>
//             Already have an account?{" "}
//             <span onClick={() => setCurrentState("Login")}>Login here</span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Login;
