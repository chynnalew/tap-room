import React from 'react';

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

  return (
    <div style={headerStyle}>
      <h1>Track that Tap</h1>
    </div>
  )
}

export default Header;