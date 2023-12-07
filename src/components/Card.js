import React from 'react'

function Card(props) {
    
  return (
    <div>
        <img src={props.course.image.url}/>
        <h2>{props.course.title}</h2>
        <p>{props.course.description}</p>
    </div>
  )
}

export default Card