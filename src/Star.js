import React from "react"

export default function Star(props) {

  let starIcon = props.isFilled ? "star-empty.png" : "star-filled.png"

  return (
    <div>
      <img src={`../images/${starIcon}`}
        alt="star"
        className="card--favorite"
        onClick={props.handleClick}/>
    </div>
  )
}
