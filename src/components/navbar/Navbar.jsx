import "../navbar/Navbar.css";
import {assets} from "../../assets/assets";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount, token, setToken} = useContext(StoreContext);
    
    const navigate = useNavigate();
    const logout = () => {
     localStorage.removeItem("token");
     setToken("");
     navigate("/");
    };
  return (
    <div className="navbar">
        <Link to="/"><h3 className="logo" >ORDER NOW</h3></Link>
        <ul className="navbar-menu">
            <Link to="/"onClick={()=> setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href="#menu" onClick={()=> setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href="#app_download" onClick={()=> setMenu("mobile")} className={menu==="mobile"?"active":""}>mobile</a>
            <a href="#footer" onClick={()=> setMenu("contact")} className={menu==="contact"?"active":""}>contact</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to="/cart"><img src={assets.basket_icon} alt="cart_icon" /></Link>
                <div className={getTotalCartAmount() ===0 ? "" : "dot" }></div>
            </div>
            { !token ? 
            <button onClick={() => setShowLogin(true)}>sign in</button>
             : <div className="navbar_profile">
                <img src={assets.profile_icon} alt="profile_icon" />
                <ul className="nav_profile_dropdown">
                    <li onClick={()=> navigate("/usersorders")}><img src={assets.bag_icon} alt="bag_icon" />Orders</li>
                    <hr />
                    <li onClick={logout}><img src={assets.logout_icon} alt="logout_icon" />Logout</li>
                </ul>
             </div>
        }
        </div>
    </div>
  )
}

export default Navbar