import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function AddTap(props) {

  const formStyle = {

  }

  function handleNewTapForm(event) {
    event.preventDefault();
    props.onNewTapCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, abv: event.target.abv.value, description: event.target.description.value, quantity: event.target.quantity.value})
  }

  return (
    <React.Fragment>
      <div style={formStyle}>
        <form onSubmit={handleNewTapForm}>
          <input
            type="text"
            name="name"
            placeholder="Beverage Name" />
          <br />
          <br />
          <input
            type="text"
            name="brand"
            placeholder="Beverage Brand" />
          <br />
          <br/>
          <input 
            type="number"
            name="price"
            placeholder="Price per Pint"
            min="1" />
          <br />
          <br />
          <input 
            type="number"
            name="abv"
            placeholder="ABV%"
            min="1" />
          <br />
          <br/>
          <textarea 
            name="description"
            placeholder="Description" />
          <br />
          <br/>
          <input 
            type="number"
            name="quantity"
            placeholder="Current Pints Available"
            min="0" />
          <br />
          <br/>
          <button type="submit">Add Tap</button>
        </form>
      </div>
    </React.Fragment>
  );
}

AddTap.propTypes = {
  onNewTapCreation: PropTypes.func
}

export default AddTap;