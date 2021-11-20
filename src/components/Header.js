import React from 'react';
import beerPic from '../img/beer.jpeg';
import '../css/index.css';

function Header() {

  const headerStyle = {
    width: '100%',
    height: '86px',
    backgroundColor: 'white',
    color: 'black',
    position: 'fixed',
    paddingLeft: '20px',
    top: '0',
    left:'0'
  }
  const imgStyle = {
    display: 'inline-block',
    height: '80px',
    float: 'left'
  }

  return (
    <div style={headerStyle}>
      <img style={imgStyle} src={beerPic} alt='beer clip art'/>
      <h1 style={{ float: 'left' }} id='headerText'>Track that Tap</h1>
    </div>
  )
}

export default Header;