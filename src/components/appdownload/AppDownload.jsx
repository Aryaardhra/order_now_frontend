import { assets } from "../../assets/assets";
import "../appdownload/AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app_download" id="app_download">
         <p>For Better Experience Download <br/>Order Now App</p>
         <div className="app_download_platforms">
            <img src={assets.play_store} alt="play_store_img" />
            <img src={assets.app_store} alt="app_store_img" />
         </div>
    </div>
  )
}

export default AppDownload;