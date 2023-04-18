import React from 'react'
import { FaBolt, FaDownload} from "react-icons/fa";
import './nav.css'



const Nav = () => {
  return (
    <>
        <nav>
            <div className="left">
                <FaBolt/>
                <span>Fintrack</span>
            </div>
            <div className="right">
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Products</li>
                </ul>

               <p>Download <FaDownload/></p> 
            </div>
        </nav>
    </>
  )
}

export default Nav