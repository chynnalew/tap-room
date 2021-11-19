import React from 'react';

function Header() {

  const headerStyle = {
    width: '99%',
    height: '80px',
    fontFamily: 'Monaco',
    backgroundColor: 'green',
    position: 'fixed',
    textAlign: 'center'
  }

  return (
    <div style={headerStyle}>
      <h1>Tap Room</h1>
    </div>
  )
}

export default Header;