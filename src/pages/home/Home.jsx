import { useState } from "react";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import "../home/Home.css";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay";
import AppDownload from "../../components/appdownload/AppDownload";

const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <>
    <Header />
        <Menu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload />
    </>
    
  )
}

export default Home