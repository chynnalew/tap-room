import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props) {

  const tapListStyle = {
    textAlign: 'center',
  }

  return (
    <div style={tapListStyle}>
      <h1>Current Tap List</h1>
      {props.tapList.map((tap) =>
        <Tap
          whenViewTapClicked={props.onViewTapClick}
          whenSellPintClicked={props.onSellPintClick}
          name={tap.name}
          brand={tap.brand}
          abv={tap.abv}
          price={tap.price}
          quantity={tap.quantity}
          id={tap.id}
          key={tap.id}
        />
      )}
    </div>
  )
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onViewTapClick: PropTypes.func,
  onSellPintClick: PropTypes.func
}

export default TapList;