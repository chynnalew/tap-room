import PropTypes from 'prop-types';
import React from 'react';
import { v4 } from 'uuid';
import '../css/index.css';

function AddTap(props) {

  const formStyle = {
    width: '90%',
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

  function handleNewTapForm(event) {
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
        <h1>Add a Keg</h1>
        <form onSubmit={handleNewTapForm}>
          <label>Name</label>
          <br/>
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Beverage Name" />
          <br />
          <label>Beverage Brand</label>
          <br/>
          <input
            style={inputStyle}
            type="text"
            name="brand"
            placeholder="Beverage Brand" />
          <br />
          <label>Price per Pint</label>
          <br/>
          <input
            style={inputStyle}
            type="number"
            name="price"
            placeholder="Price per Pint"
            min="1" />
          <br />
          <label>ABV%</label>
          <br/>
          <input
            style={inputStyle}
            type="number"
            name="abv"
            placeholder="ABV%"
            min="1" />
          <br />
          <label>Description</label>
          <br/>
          <textarea
            style={inputStyle}
            name="description"
            placeholder="Description" />
          <br />
          <label>Pints in Keg</label>
          <br/>
          <input
            style={inputStyle}
            type="number"
            name="quantity"
            placeholder="Current Pints Available (full Keg = 124 pints)"
            min="0"
            defaultValue='124'/>
          <br />
          <button class='hover' style={buttonStyle} type="submit">Add Keg</button>
        </form>
      </div>
    </React.Fragment>
  );
}

AddTap.propTypes = {
  onNewTapCreation: PropTypes.func
}

export default AddTap;