import { useContext } from "react";
import "../foodDisplay/foodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItem/FoodItem";

const FoodDisplay = ({ category }) => {
console.log(category)
   const {food_list} = useContext(StoreContext);
   console.log(food_list)
  // const [food_list, setFoodList] = useState([]);
  return (
    <>
    <div className="food_display" id="food_display">
        <h2>Top dishes near you</h2>
        <div className="food_display_list">
            { food_list?.map((item, index) => {
             { console.log( item.category)}
              if(category === "All" || category === item.category){
                return <FoodItem key={index}
                id = {item._id}
                name = { item.name}
                price = { item.price}
                description= { item.description}
                image= { item.image}
                />
              }
            })}
        </div>
    </div>
    </>
  )
}

export default FoodDisplay