import React from 'react';

function Header() {

  const headerStyle = {
    width: '100%',
    height: '80px',
    backgroundColor: 'white',
    color: 'black',
    position: 'fixed',
    paddingLeft: '20px'
  }

  return (
    <div style={headerStyle}>
      <h1>Track that Tap</h1>
    </div>
  )
}

export default Header;