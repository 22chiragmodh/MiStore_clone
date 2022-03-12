import React from 'react'
import {Link} from 'react-router-dom';
import "../stylefolder/Hotaccesmenu.css";
const HotAccesMenu = () => {
  return (
    <div className="hotaccesmenu">
        <Link className="hotaccesmenulink" to="/home">Home</Link>
      <Link className="hotaccesmenulink" to="/music">Music Store</Link>
      
        <Link className="hotaccesmenulink" to="/lifestyle">LifeStyle</Link>
        
        <Link className="hotaccesmenulink" to="/smartdevice">Smart Devices</Link>
        <Link className="hotaccesmenulink" to="/mobileaccesories">Mobile Accessories</Link>
        </div>
  )
}

export default HotAccesMenu;