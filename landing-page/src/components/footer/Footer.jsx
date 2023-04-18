import React from 'react'
import { FaBolt, FaTwitter, FaInstagram, FaFacebook, FaLinkedin} from "react-icons/fa";
import './footer.css'

const footer = () => {
  return (
    <>
        <footer>
            <div className="first">
                <div className="row1">
                <FaBolt/>
                <span>Fintrack</span>
                </div>
                <div className="row2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quaerat?</p>
                </div>
                <div className="row3">
                <FaTwitter/>
                <FaInstagram/>
                <FaFacebook/>
                <FaLinkedin/>
                </div>
                
                

            </div>
            <div className="second">
                <ul>
                    <li> <a href="">Links</a> </li>
                    <li> <a href="">Home</a> </li>
                    <li><a href="">Features</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
            <div className="third">
                <ul>
                    <li> <a href="">Support</a></li>
                    <li> <a href="">FAQ</a></li>
                    <li> <a href="">Help Center</a></li>
                    <li> <a href="">Security</a></li>
                    <li> <a href="">Accounts</a></li>
                </ul>
            </div>
            <div className="fourth">
            <ul>
                    <li> <a href="">Legal</a></li>
                    <li> <a href="">Privacy Policy</a></li>
                    <li> <a href="">Terms and Conditions</a></li>
                    <li> <a href="">Security</a></li>
                    <li> <a href="">Accessibility</a></li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default footer