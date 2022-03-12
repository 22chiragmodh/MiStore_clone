import React from 'react'
import VideoCart from "./VideoCart";
import "../stylefolder/Videos.css"
const Videos = ({ videos }) => {
    return (
        <div className="videos">
            {
                videos.map((item, index) => (
                    <VideoCart index={index} key={item.image} image={item.image} name={item.name} />
                ))
            }
        </div>
    )
}

export default Videos