import PropTypes from 'prop-types';
import React from 'react';
import { v4 } from 'uuid';
import '../css/index.css';

function UpdateTap(props) {

  const formStyle = {
    width: '90%',
    border: '2px white solid',
    padding: '10px',
    textAlign: 'center'
  }
  const inputStyle = {
    width: '90%',
    padding: '10px',
    margin: '20px'
  }
  const buttonStyle = {
    backgroundColor: 'black',
    border: 'white 2px dashed',
    color: 'white',
    padding: '10px'
  }

  function handleUpdateTapForm(event) {
    event.preventDefault();
    props.onNewTapCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <div style={formStyle}>
        <h1>Update {props.tap.name} Keg</h1>
        <form onSubmit={handleUpdateTapForm}>
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Beverage Name"
            defaultValue={props.tap.name}
            />
          <br />
          <input
            style={inputStyle}
            type="text"
            name="brand"
            placeholder="Beverage Brand"
            defaultValue={props.tap.brand}/>
          <br />
          <input
            style={inputStyle}
            type="number"
            name="price"
            placeholder="Price per Pint"
            min="1"
            defaultValue={props.tap.price}/>
          <br />
          <input
            style={inputStyle}
            type="number"
            name="abv"
            placeholder="ABV%"
            min="1"
            defaultValue={props.tap.abv}/>
          <br />
          <textarea
            style={inputStyle}
            name="description"
            placeholder="Description"
            defaultValue={props.tap.description}/>
          <br />
          <input
            style={inputStyle}
            type="number"
            name="quantity"
            placeholder="Current Pints Available (full Keg = 124 pints)"
            min="0"
            defaultValue={props.tap.quantity}/>
          <br />
          <button class='hover' style={buttonStyle} type="submit">Update Keg</button>
        </form>
      </div>
    </React.Fragment>
  );
}

UpdateTap.propTypes = {
  tap: PropTypes.object,
  onUpdateTapFormSubmit: PropTypes.func
}

export default UpdateTap;