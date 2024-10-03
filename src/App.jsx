import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrders from "./pages/placeOrders/PlaceOrders";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import Login from "./components/login/Login";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Verify from "./components/payment/Verify";
import UserOrders from "./pages/userorders/UserOrders";

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    <ToastContainer />
    {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
    <Navbar 
    setShowLogin = {setShowLogin}
    />
    <div className="app">
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrders />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/usersorders" element={<UserOrders />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
