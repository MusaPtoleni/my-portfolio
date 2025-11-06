import Navbar from "../../components/Navbar/Navbar"
import "./Contact.css"
import ContactIMG from '../../assets/images/mobile-search.png'
import { FaPhone } from "react-icons/fa6";
import {FcGoogle, FcGlobe} from "react-icons/fc"
import { BsWhatsapp } from "react-icons/bs";
import Footer from "../../components/Footer/Footer";


export default function Contact() {
  return (
    <div className="contact">
        {/* <Navbar /> */}
        <div className="contact-page">
          <h4>Feel Free To Reach Out!</h4>
            <img src={ContactIMG}   alt="girl in a yellow top"/>
            <div className="contact-detail">
              <p><FaPhone className="contact-icons" id="phone"/><b>Phone:</b> +27 68 389 9025</p>
              <p><FcGoogle className="contact-icons"/><b>Email:</b> musaptoleni@gmail.com</p>
              <p><FcGlobe className="contact-icons"/><b>Address:</b> Cape Town, South Africa </p>
              <p><BsWhatsapp className="contact-icons" id="whatsapp"/><b>What's App:</b> +27 68 389 9025</p>
            </div>
        </div>
        {/* <Footer/> */}
    </div>
  )
}
