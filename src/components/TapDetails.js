import React from 'react';
import PropTypes from 'prop-types';

function TapDetails(props) {
  
  const tapCardStyle = {
    width: '60%',
    padding: '10px',
    textAlign: 'center',
    margin: 'auto'
  }
  const buttonStyle = {
    backgroundColor: 'black',
    border: 'white 1px dashed',
    color: 'white',
    padding: '10px',
    margin: '3px'
  }
  const bold = {
    fontWeight: 'bold'
  }

  if (props.quantity === 0) {
    return (
      <React.Fragment>
        <div style={tapCardStyle}>
          <h1>{props.tap.name}</h1>
          <p>{props.description}</p>
          <p style={bold}>Brand: {props.brand}</p>
          <p style={bold}>ABV: {props.abv}%</p>
          <p style={bold}>Price: ${props.price}</p>
          <p>Pints Available: {props.quantity}</p>
          <button style={buttonStyle}>Update</button>
          <button style={buttonStyle}>Sold Out</button>
          <button style={buttonStyle}>Delete Keg</button>
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div style={tapCardStyle}>
        <h1>{props.tap.name}</h1>
        <p>{props.tap.description}</p>
        <p style={bold}>Brand: {props.tap.brand}</p>
        <p style={bold}>ABV: {props.tap.abv}%</p>
        <p style={bold}>Price: ${props.tap.price}</p>
        <p>Pints Available: {props.tap.quantity}</p>
        <button style={buttonStyle}>Update</button>
        <button style={buttonStyle}>Sell a Pint</button>
        <button style={buttonStyle}>Delete Keg</button>
      </div>
    </React.Fragment>
  )
}

TapDetails.propTypes = {
  tap: PropTypes.object
}

export default TapDetails;