import React from 'react';
import "../stylefolder/Navcard.css";
const Navcard = ({name,price,image,index}) => {
  return (
    <div className="navcard">
        <img src={image} alt={`${index} phone`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default Navcard