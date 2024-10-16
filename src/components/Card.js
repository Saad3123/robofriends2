import React from "react";
// we need to import React to make understand and run jsx


//props are the list of robots
const Card = (props) =>{
  //this destructuring replaces "props.name" to "name"
  const {name, email} = props;
  //should return only one thing, in this case it's the div
  return(
    <div className="bg-light-green dib br3 pa3 ma2 ">
      <img src={`https://robohash.org/${props.id}?200x200`} alt="Random Robot"></img>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  )
}

export default Card;