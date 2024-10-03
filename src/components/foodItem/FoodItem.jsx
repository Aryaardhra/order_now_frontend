import { useContext } from "react";
import { assets } from "../../assets/assets";
import "../foodItem/FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);
  return (
    <>
    <div className="food_item">
      <div className="food_item_img_container">
        <img src={url+"/images/"+image} alt={id} className="food_item_image"/>
        {
          !cartItems[id] ? <img className="add" alt="" src={assets.add_icon_white}
          onClick={() => addToCart(id)}
          />
          : <div className="food_item_counter">
            <img src={assets.remove_icon_red} alt="" onClick={() => removeFromCart(id)}/>
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} alt="" onClick={() => addToCart(id)}/>
          </div>
        }
      </div>
      <div className="food_item_info">
        <div className="food_item_name_rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food_item_desc">{description}</p>
        <p className="food_item_price">₹ {price}</p>
      </div>
    </div>
    </>
  )
}

export default FoodItem ;