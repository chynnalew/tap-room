import React from 'react';
import '../css/index.css';

function AboutUs() {
  const aboutUsStyle = {
    width: '60%',
    padding: '10px',
    textAlign: 'center',
    margin: 'auto'
  }
  const alignLeft = {
    textAlign: 'left'
  }
  return (
    <div style={aboutUsStyle}>
      <h1>About Us</h1>
      <p>
        Are you tired of losing track of your taps?
        <br/>
        We can help!
        <br/> <hr/> <br/>
        Track your kegs and the pints left in them with these simple instructions:
        <br /> <br />
        <ul style={alignLeft}>
          <li><strong>Got Kegs?</strong> View a list of all kegs on the main page, or by clicking "All Kegs" in the navigation bar.</li>
          <li><strong>Need the Deets?</strong> Click the "View Details" button located on each keg's card to see more details about that keg.</li>
          <li><strong>Got new stock?</strong> Click "Add a Keg" in the navigation bar to start tracking your new product!</li>
          <li><strong>Sell some beer?</strong> Track how many pints are left in each keg with a simple click! Find your beer on the All Kegs page and click "Sell a Pint" to decrement the quantity of pints left in the keg by one. (This can also be done from any details page)</li>
          <li><strong>Oops! Messed up?</strong> If you accidentally clicked the "Sell a Pint" button, don't fret! From that beer's details page, click the "Add a Pint" button to increment the pint count by one. All better!</li>
          <li><strong>Big oops??</strong> If you messed up a keg's details, don't fret! From that beer's details page, click the "Update" button to edit the keg's information. All better!</li>
          <li><strong>All done?</strong> If you're done with a keg for good, navigate to that keg's details page and click the "Delete Keg" button. POOF! All gone! (This can not be undone. Use with care)</li>
        </ul>
      </p>
    </div>
  )
}

export default AboutUs;