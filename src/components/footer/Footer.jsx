import { assets } from "../../assets/assets";
import "../footer/Footer.css";
import "../navbar/Navbar.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
<div className="footer_content">
    <div className="footer_content_left">
     <h3 className="footer_logo">ORDER NOW</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam ante, laoreet in tincidunt nec, porttitor sit amet arcu. Nam bibendum ipsum eros, vel iaculis orci sollicitudin nec.
       Pellentesque suscipit elementum felis, in elementum nisl suscipit sed. Fusce mollis congue pulvinar. Aliquam non mauris enim. Quisque eleifend ipsum felis, sed pretium metus hendrerit quis. </p>
     <div className="footer_social_icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
     </div>
    </div>
    <div className="footer_content_center">
     <h2>COMPANY</h2>
     <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
     </ul>
    </div>
    <div className="footer_content_right">
    <h2>GET IN TOUCH</h2>
    <ul>
        <li>+91 8756389560</li>
        <li>contact@gmail.com</li>
    </ul>
    </div>
</div>
<hr />
<p className="footer_copyright">Copyright 2024 Ordernow.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer