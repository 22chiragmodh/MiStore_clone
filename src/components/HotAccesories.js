import React from 'react'
import Hotitemcart from './Hotitemcart';
import "../stylefolder/HotAccesories.css"
const HotAccesories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifestyle,lifestyleCover,mobileaccesories,mobileaccessoriesCover}) => {
  return (
    <div class="HotAccesories">
      <div>
        <img src={musicCover || smartDeviceCover || homeCover || mobileaccessoriesCover || lifestyleCover} alt="Cover" />
      </div>
        
        <div>
          {
            music && music.map((item, index) =>(
              <Hotitemcart key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))
          }
          {
           smartDevice && smartDevice.map((item, index) =>(
              <Hotitemcart key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))
          }
          {
           home && home.map((item, index) =>(
              <Hotitemcart key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))
          }
          {
           lifestyle && lifestyle.map((item, index) =>(
              <Hotitemcart key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))
          }
          {
           mobileaccesories && mobileaccesories.map((item, index) =>(
              <Hotitemcart key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))
          }

          <Hotitemcart image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>
        </div>
    </div>
  )
}

export default HotAccesories