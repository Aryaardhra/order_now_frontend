import { useContext, useEffect, useState } from "react";
import "../placeOrders/PlaceOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PlaceOrders = () => {

  const navigate = useNavigate();
  const { getTotalCartAmount, token, food_list, cartItems, url } =useContext(StoreContext);

  const [delData, setDelData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    street : "",
    city : "",
    state : "",
    zipcode : "",
    country : "",
    phone : ""
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDelData(delData =>({...delData, [name] : value}))
  };

  /*useEffect (() => {
    console.log(delData);
  },[delData])*/

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address : delData,
      items : orderItems,
      amount : getTotalCartAmount()+2,
    }
    let response = await axios.post(url+"/api/order/place", orderData, {headers : {token}});
    if(response.data.success){
      navigate(`/verify?success=true&orderId=${response.data.orderId}`)
      toast.success("payment processing...");
      /*const { session_url} = response.data;
      window.location.replace(session_url)*/
      //console.log(response.data)
    } else {
     toast.error(response.data.message);
    }
  };


  useEffect(() => {
if(!token){
navigate("/cart")
} else if(getTotalCartAmount()===0){
navigate("/cart");
}
  },[token])
  return (
    <>
    <form onSubmit={placeOrder} className="place_order">
      <div className="place_order_left">
        <p className="title">Delivery Information</p>
        <div className="multi_fields">
          <input type="text" placeholder="First Name"
          name="firstName"
          onChange={onChangeHandler}
          value={delData.firstName}
          required
          />
          <input type="text" placeholder="Last Name"
          name="lastName"
          onChange={onChangeHandler}
          value={delData.lastName}
          required
          />
        </div>
        <input type="email" placeholder="Email address"
        name="email"
        onChange={onChangeHandler}
        value={delData.email}
        required
        />
        <input type="text" placeholder="Street"
        name="street"
        onChange={onChangeHandler}
        value={delData.street}
        required
        />
        <div className="multi_fields">
        <input type="text" placeholder="City"
        name="city"
        onChange={onChangeHandler}
        value={delData.city}
        required
        />
        <input type="text" placeholder="State"
        name="state"
        onChange={onChangeHandler}
        value={delData.state}
        required
        />
        </div>
        <div className="multi_fields">
        <input type="text" placeholder="Zip code"
        name="zipcode"
        onChange={onChangeHandler}
        value={delData.zipcode}
        required
        />
        <input type="text" placeholder="Country"
        name="country"
        onChange={onChangeHandler}
        value={delData.country}
        required
        />
        </div>
        <input type="text" placeholder="Phone" 
        name="phone"
        onChange={onChangeHandler}
        value={delData.phone}
        required
        />
      </div>
      <div className="place_order_right">
      <div className="cart_total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart_taotal_details">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>Delivery Fee</p>
              <p>₹ {getTotalCartAmount()=== 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <b>Total</b>
              <b>₹ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type=" sumbit" >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
    </>
  )
}

export default PlaceOrders