import React from 'react'
import "../stylefolder/starProduct.css";


const Starproduct = ({starp}) => {
  return (
    <div className="starproduct">
      <div><a href={starp[0].url}> <img src={starp[0].image} alt="1st Product" /></a></div>
      <div>
      <a href={starp[1].url}> <img src={starp[1].image} alt="2nd Product" /></a>
      <a href={starp[2].url}> <img src={starp[2].image} alt="3rd Product" /></a>
      <a href={starp[3].url}> <img src={starp[3].image} alt="4th Product" /></a>
      </div>
      
    </div>
  )
}

export default Starproduct;