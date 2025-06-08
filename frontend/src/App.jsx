import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
// import Login from "./components/Login/Login";
// import ExploreMenu from "./components/ExplorMenu/ExploreMenu.jsx";
// import UserDetailsPage from "./pages/UserDetailsPage";
import AllUsers from "./components/UserDetails/AllUsers";
import AuthContainer from "./components/Login/AuthContainer";
import UserTable from "./components/userTable/userTable";




const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>


      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
{showLogin && <AuthContainer setShowLogin={setShowLogin} />}
    {/* <AuthContainer setShowLogin={setShowLogin} /> */}
      {/* {showLogin ? <Login setShowLogin={setShowLogin}></Login> : <></>} */}

      <div className="app">
        <Navbar setShowLogin={setShowLogin}></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>} />
          {/* <Route path="/explore-menu" element={<ExploreMenu/>} /> */}

          <Route path="/cart" element={<Cart></Cart>} />

          {/* <Route path="/order" element={<PlaceOrder></PlaceOrder>} /> */}
          {/* <Route path="/user-details" element={<UserDetailsPage />} /> */}
          <Route path="/all-users" element={<AllUsers></AllUsers>} />
          <Route path="/user-table" element={<UserTable></UserTable>} />
        </Routes>
      <ToastContainer></ToastContainer>
      </div>

      <Footer></Footer>
    </>
  );
};

export default App;
