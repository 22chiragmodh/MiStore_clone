import React,{useState, useEffect} from 'react';
import Navcard from "./Navcard";
import "../stylefolder/navroute.css";



const NavRoute = ({ home, redmi, miphones, audio, tv, laptop, fitnessAndLifeStyle, accessories }) => {
      
    //set all toggle state
     const [miphoneToggle,setmiphoneToggle]=useState(false);
     const [redmiphoneToggle,setredmiphoneToggle]=useState(false);
     const [homeToggle,sethomeToggle]=useState(false);
     const [fitnesslifestyleToggle,setfitnesslifestyleToggle]=useState(false);
     const [tvToggle,settvToggle]=useState(false);
     const [audioToggle,setaudioToggle]=useState(false);
     const [accesoriesToggle,setaccesoriesToggle]=useState(false);
     const [laptopToggle,setlaptopToggle]=useState(false);

    useEffect(()=>{
        if(window.location.pathname==="/miphones")
        {
            return setmiphoneToggle(true)
        }
        if(window.location.pathname==="/redmiphones")
        {
            return setredmiphoneToggle(true)
        }
        if(window.location.pathname==="/laptops")
        {
            return setlaptopToggle(true)
        }
        if(window.location.pathname==="/tv")
        {
            return settvToggle(true)
        }
        if(window.location.pathname==="/lifestyle")
        {
            return setfitnesslifestyleToggle(true)
        }
        if(window.location.pathname==="/home")
        {
            return sethomeToggle(true)
        }
        if(window.location.pathname==="/audio")
        {
            return setaudioToggle(true)
        }
        if(window.location.pathname==="/accessories")
        {
            return setaccesoriesToggle(true)
        }
    },[])


    return (
        <div className="nav-route">

            {

                miphoneToggle ? miphones.map((item) => (
                    <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null

            }
            {

                redmiphoneToggle ? redmi.map((item) => (
                    <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null

            }
            {

                homeToggle ? home.map((item) => (
                    <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null

            }
            {

                fitnesslifestyleToggle ? fitnessAndLifeStyle.map((item) => (
                    <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null

            }
            {

                tvToggle ? tv.map((item) => (
                    <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null

            }
            {

                laptopToggle ? laptop.map((item) => (
                    <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null

            }
            {

                audioToggle ? audio.map((item) => (
                    <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null

            }
            {

                accesoriesToggle ? accessories.map((item) => (
                    <Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null

            }


        </div>
    )
}

export default NavRoute