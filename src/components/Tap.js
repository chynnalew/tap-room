import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {
  const tapCardStyle = {
    width: '200px',
    height: '300px',
    padding: '10px',
    margin: '10px',
    border: '1px grey solid',
    float: 'left'
  }

  if (props.quantity === 0) {
    return (
      <React.Fragment>
        <div style={tapCardStyle}>
          <h1>{props.name}</h1>
          <p>Brand: {props.brand}</p>
          <p>ABV: {props.abv}%</p>
          <p>Price: $ {props.price}</p>
          <p>Quantity: {props.quantity}</p>
          <button>View Details</button>
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div style={tapCardStyle}>
        <h1>{props.name}</h1>
        <p>Brand: {props.brand}</p>
        <p>ABV: {props.abv}%</p>
        <p>Price: $ {props.price}</p>
        <p>Quantity: {props.quantity}</p>
        <button>View Details</button>
        <button>Sell a Pint</button>
      </div>
    </React.Fragment>
  )
}

Tap.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  quantity: PropTypes.number
}

export default Tap;