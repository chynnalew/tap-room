import React from 'react';
import '../css/index.css';

function NavBar(props) {

  const navBarStyle = {
    height: '100%',
    width: '100px',
    position: 'fixed',
    marginTop: '80px',
    backgroundColor: 'pink',
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  }

  return (
    <div style={navBarStyle}>
      <div style={buttonWrapStyle}>
        <button style={buttonStyle} class='buttons'>All Taps</button>
        <button style={buttonStyle} class='buttons'>Add a Tap</button>
        <button style={buttonStyle} class='buttons'>About Us</button>
      </div>
    </div>
  )
}

export default NavBar;