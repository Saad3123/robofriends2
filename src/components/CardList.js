import React from 'react';
import Card from './Card';

// robots is being exported to everyone
// we iterate, store stuff on cardComponent and return Card
// Componenet
const CardList = ({robots}) => {
  const cardArray = robots.map((user,i)=>{
    // we use key= i to lessen the DOMs work cuz without it, it wont exactly know which one to remove and 
    // and will take alot of time to do, remember minimize the work
  return(<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>)
  })
  return (
    <div>
      {/* we use {} cuz we using JS */}
        {cardArray}
    </div>
  );
}

export default CardList;