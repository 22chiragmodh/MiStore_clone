import React from 'react';
import "../stylefolder/heading_line.css"

const Heading_line = ({text}) => {
  return (
    <div className="heading">
        <div></div>
        <p>{text}</p>
        <div></div>
    </div>
  )
}

export default Heading_line