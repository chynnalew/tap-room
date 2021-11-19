import React from 'react';
import '../css/index.css';
import PropTypes from 'prop-types';

function NavBar(props) {

  const navBarStyle = {
    height: '100%',
    width: '150px',
    position: 'fixed',
    marginTop: '80px',
    backgroundColor: 'black',
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: '5px white solid'
  }

  const buttonWrapStyle = {
    height: '90%',
    margin: 'auto'
  }

  const buttonStyle = {
    marginTop: '10%',
    marginBottom: '50%',
    textDecoration: 'none',
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: 'large'
  }

  return (
    <div style={navBarStyle}>
      <div style={buttonWrapStyle}>
        <button style={buttonStyle} class='buttons' onClick={() => props.onAllKegsClick()}>All Kegs</button>
        <button style={buttonStyle} class='buttons' onClick={() => props.onAddAKegClick()}>Add a Keg</button>
        <button style={buttonStyle} class='buttons' onClick={() => props.onInstructionsClick()}>Instructions</button>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  onAllKegsClick: PropTypes.func,
  onAddKegClick: PropTypes.func,
  onInstructionsClick: PropTypes.func
}

export default NavBar;