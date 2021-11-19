import React from 'react';
import NavBar from './NavBar';
import TapList from './TapList';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tapListVisible: true,
      addTapVisible: false,
      tapDetailsVisible: false,
      updateTapVisible: false,
      aboutVisible: false,
      
      tapList: [
        {
          name: 'Basic Beer',
          brand: 'GenAric',
          price: 2,
          abv: 4,
          description: 'A run of the mill basic beer. It\'s probably warm and flat, but it\'s cheap!',
          quantity: 124
        },
        {
          name: 'PDX Beer',
          brand: 'HipStir',
          price: 10,
          abv: 7,
          description: 'It smells like pine trees and tastes like them too',
          quantity: 124
        },
        {
          name: 'Generic Sour',
          brand: 'WorHead',
          price: 6,
          abv: 6,
          description: 'First it\'s sour, then it\'s sweet! Jk, it\'s just sour. No one is sure what the flavor is supposed to be',
          quantity: 124
        },
        {
          name: 'Seltz-er',
          brand: 'SummerVibz',
          price: 5,
          abv: 4,
          description: 'Did someone in the next room whisper the name of a fruit? That\'s what this tastes like. (It\'s literally just bubbly water.)',
          quantity: 124
        }
      ]
    }
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.tapListVisible) {
      currentlyVisibleState = <TapList tapList={this.state.tapList}/>
    }

    const controlStyle = {
      width: 'calc(100% - 150px)',
      marginTop: '90px',
      marginLeft: '100px',
      float: 'right',
    }

    return (
      <React.Fragment>
        <NavBar />
        <div style = { controlStyle } >
          {currentlyVisibleState}
        </div>
      </React.Fragment>
    )
  }
}

export default TapControl;