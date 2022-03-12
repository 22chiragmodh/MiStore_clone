import React from 'react'
import Offer from './offer.js';
import "../stylefolder/offersection.css"

const Offers = ({offer}) => {
  return (
    <div className="offersection">
        {
            offer.map((item,index) =>(
         <Offer key={item.image} index={index} src={item.image} link={item.url}/>
            ))
        }
        
        </div>
  )
}

export default Offers