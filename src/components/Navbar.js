import React from 'react'
import "../stylefolder/navmenu.css";

import {ImSearch} from "react-icons/im"





const Navbar = () => {
  return (
    
    <div className="navmenu">
     
            <div className="logo">
              <a href="/">  <img id="logoImage" src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg" alt="" /></a>
           
            </div>
        
         <a href="./redmiphones" className="nava">Redmi </a>
         <a href="./miphones" className="nava">Mi</a>
         <a href="./laptops" className="nava">laptop</a>
         <a href="./tv" className="nava">TV</a>
         <a href="./lifestyle" className="nava">Fitness & lifeStyle</a>
         <a href="./home" className="nava">Home</a>
         <a href="./audio" className="nava">Radio</a>
         <a href="./accessories" className="nava">Accessories</a>
      

      <div className="searchbox">
        <input type="text" name="search" placeholder="Search products"/>
        <p><ImSearch/></p>
         
      </div>
     
    </div>
  
  )
}

export default Navbar;