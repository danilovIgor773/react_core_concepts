import React from 'react';

const Welcome = (props) => {
  return (
    React.createElement(
      "h1", 
      {style:{color: "green", textAlign: "center"}},
      `Welcome ${props.name}! This component is created with createElement function!`)
  );
}

export default Welcome;