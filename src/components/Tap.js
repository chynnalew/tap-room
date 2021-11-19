import PropTypes from 'prop-types';
import React from 'react';
import '../css/index.css';

function Tap(props) {
  const tapCardStyle = {
    width: '200px',
    height: '300px',
    padding: '10px',
    margin: '10px',
    border: '1px grey solid',
    float: 'left'
  }
  const buttonStyle = {
    backgroundColor: 'black',
    border: 'white 1px dashed',
    color: 'white',
    padding: '10px',
    margin: '3px'
  }
  const soldOutButtonStyle = {
    backgroundColor: 'black',
    border: 'white 1px dashed',
    color: 'red',
    padding: '10px',
    margin: '3px'
  }

  if (props.quantity === 0) {
    return (
      <React.Fragment>
        <div style={tapCardStyle}>
          <h1>{props.name}</h1>
          <p>Brand: {props.brand}</p>
          <p>ABV: {props.abv}%</p>
          <p>Price: ${props.price}</p>
          <p>SOLD OUT</p>
          <button class='hover' style={buttonStyle} onClick={() => props.whenViewTapClicked(props.id)}>View Details</button>
          <button style={soldOutButtonStyle}>Sold Out</button>
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
        <p>Price: ${props.price}</p>
        <p>Pints Available: {props.quantity}</p>
        <button class='hover' style={buttonStyle} onClick={() => props.whenViewTapClicked(props.id)}>View Details</button>
        <button class='hover' style={buttonStyle} onClick={() => props.whenSellPintClicked(props.id)}>Sell a Pint</button>
      </div>
    </React.Fragment>
  )
}

Tap.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenViewTapClicked: PropTypes.func,
  whenSellPintClicked: PropTypes.func,
}

export default Tap;