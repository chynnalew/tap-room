import React from 'react';
import Tap from './Tap';

function TapList(props) {

  const tapListStyle = {
    textAlign: 'center',
  }

  return (
    <div style={tapListStyle}>
      <h1>Current Tap List</h1>
      {props.tapList.map((tap) =>
        <Tap
          name={tap.name}
          brand={tap.brand}
          abv={tap.abv}
          price={tap.price}
          quantity={tap.quantity}
        />
      )}
    </div>
  )
}

export default TapList;