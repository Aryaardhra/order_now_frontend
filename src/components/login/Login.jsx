import { useContext, useState } from "react";
import "../login/Login.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Login = ({setShowLogin}) => {

  const {url, setToken} = useContext(StoreContext);

    const [currentState, setCurrentState] = useState("Sign Up");
    const [data, setData] = useState({
      name : "",
      email : "",
      password : ""
    })

    const onChangeHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setData(data => ({...data, [name] : value}))
    };

    /*useEffect(() => {
      console.log(data);
    },[data])*/

    const onLogin = async (e) => {
       e.preventDefault();

       let newUrl = url;
       if (currentState === "Login"){
        newUrl += "/api/user/login"
       }
       else {
        newUrl += "/api/user/register"
       }
    const response = await axios.post(newUrl, data);

    if (response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
    } else {
      alert(response.data.message)
    }
    };

  return (
    <>
    <div className="login">
        <form onSubmit={onLogin} className="login_container">
            <div className="login_title">
                <h2>{currentState}</h2>
                <img src={assets.cross_icon} alt="cross_icon" onClick={() => setShowLogin(false)} />
            </div>
            <div className="login_inputs">
                { currentState === "Login" ? <></> :
              <input type="text" name="name" placeholder="Your name" required 
              onChange={onChangeHandler}
              value={data.name}
              />
                }
              <input type="email" placeholder="Your email" required  name="email"
              onChange={onChangeHandler}
              value={data.email}
              />
              <input type="password" placeholder="Password" required name="password"
               onChange={onChangeHandler}
               value={data.password}
              />
            </div>
            <button type="submit">{ currentState === "Sign Up" ? "Create account" : "Login" }</button>
            <div className="login_condition">
                <input type="checkbox" required />
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            { currentState === "Login" ? 
            <p>Create a new account ? <span onClick={() => setCurrentState("Sign Up")}>Click here</span> </p>
            : <p>Already have an account ? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
            }
        </form>
    </div>
    </>
  )
}

export default Login