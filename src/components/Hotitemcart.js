import React from 'react'
import "../stylefolder/Hotitemcart.css"
const Hotitemcart = ({image,index,name,price}) => {
  return (
    <div className="hotitemcart">
    <img src={image} alt={`${index} product`} />
    <p>{name}</p>
    <span>{price}</span>
    </div>
  )
}

export default Hotitemcart;