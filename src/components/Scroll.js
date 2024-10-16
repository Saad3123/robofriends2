import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {/* //scroll uses it's children from props i.e CArdList
        */}
      {props.children}
    </div>
  );
};

export default Scroll;
