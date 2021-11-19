import Instructions from './Instructions';
import AddTap from './AddTap';
import NavBar from './NavBar';
import React from 'react';
import TapList from './TapList';
import TapDetails from './TapDetails';
import UpdateTap from './UpdateTap';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tapListVisible: true,
      addTapVisible: false,
      tapDetailsVisible: false,
      updateTapVisible: false,
      aboutVisible: false,
      selectedTap: [],
      tapList: [
        {
          name: 'Basic Beer',
          brand: 'Generic',
          price: 2,
          abv: 4,
          description: 'A run of the mill basic beer. It\'s probably warm and flat, but it\'s cheap!',
          quantity: 75,
          id: "1tap"
        },
        {
          name: 'PDX Beer',
          brand: 'HipStir',
          price: 10,
          abv: 7,
          description: 'It smells like pine trees and tastes like them too',
          quantity: 5,
          id: "hello"
        },
        {
          name: 'Generic Sour',
          brand: 'WorHead',
          price: 6,
          abv: 6,
          description: 'First it\'s sour, then it\'s sweet! Jk, it\'s just sour. No one is sure what the flavor is supposed to be',
          quantity: 124,
          id: ":)"
        },
        {
          name: 'Seltz-er',
          brand: 'SummerVibz',
          price: 5,
          abv: 4,
          description: 'Did someone in the next room whisper the name of a fruit? That\'s what this tastes like. (It\'s literally just bubbly water.)',
          quantity: 0,
          id: "hi6"
        }
      ]
    }
  }

  handleAllKegsClick = () => {
    this.setState({
      tapListVisible: true,
      addTapVisible: false,
      tapDetailsVisible: false,
      updateTapVisible: false,
      aboutVisible: false,
    })
  }
  handleAddAKegClick = () => {
    this.setState({
      tapListVisible: false,
      addTapVisible: true,
      tapDetailsVisible: false,
      updateTapVisible: false,
      aboutVisible: false,
    })
  }
  handleInstructionsClick = () => {
    this.setState({
      tapListVisible: false,
      addTapVisible: false,
      tapDetailsVisible: false,
      updateTapVisible: false,
      aboutVisible: true,
    })
  }
  handleNewTapCreation = (newTap) => {
    const newTapList = this.state.tapList.concat(newTap);
    this.setState({
      tapList: newTapList,
      tapListVisible: true,
      addTapVisible: false,
      tapDetailsVisible: false,
      updateTapVisible: false,
      aboutVisible: false,
    });
  }

  handleViewTapClick = (id) => {
    const selectedTap = this.state.tapList.filter(tap => tap.id === id)[0];
    this.setState({
      selectedTap: selectedTap,
      tapListVisible: false,
      addTapVisible: false,
      tapDetailsVisible: true,
      updateTapVisible: false,
      aboutVisible: false,
    })
  }
  handleSellPintClick = (id) => {
    this.state.tapList.filter(tap => tap.id === id)[0].quantity--;
    this.setState({
      tapListVisible: true,
      addTapVisible: false,
      tapDetailsVisible: false,
      updateTapVisible: false,
      aboutVisible: false,
    })
  }
  handleSellPintViewClick = (id) => {
    this.state.tapList.filter(tap => tap.id === id)[0].quantity--;
    this.setState({
      tapListVisible: false,
      addTapVisible: false,
      tapDetailsVisible: true,
      updateTapVisible: false,
      aboutVisible: false,
    })
  }
  handleAddPintClick = (id) => {
    this.state.tapList.filter(tap => tap.id === id)[0].quantity++;
    this.setState({
      tapListVisible: false,
      addTapVisible: false,
      tapDetailsVisible: true,
      updateTapVisible: false,
      aboutVisible: false,
    })
  }
  handleUpdateClick = (id) => {
    const selectedTap = this.state.tapList.filter(tap => tap.id === id)[0];
    this.setState({
      selectedTap: selectedTap,
      tapListVisible: false,
      addTapVisible: false,
      tapDetailsVisible: false,
      updateTapVisible: true,
      aboutVisible: false,
    })
  }
  handleUpdateTapFormSubmit = (tap) => {
    const editedTapList = this.state.tapList.filter(tap => tap.id !== this.state.selectedTap.id).concat(tap);
    this.setState({
      tapList: editedTapList,
      tapListVisible: true,
      addTapVisible: false,
      tapDetailsVisible: false,
      updateTapVisible: false,
      aboutVisible: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.tapListVisible) {
      currentlyVisibleState =
        <TapList
          tapList={this.state.tapList}
          onViewTapClick={this.handleViewTapClick}
          onSellPintClick={this.handleSellPintClick}
        />
    }
    if (this.state.addTapVisible) {
      currentlyVisibleState =
        <AddTap
          onNewTapCreation={this.handleNewTapCreation}
        />
    }
    if (this.state.tapDetailsVisible) {
      currentlyVisibleState =
        <TapDetails
          tap={this.state.selectedTap}
          onSellPintViewClick={this.handleSellPintViewClick}
          onAddPintClick={this.handleAddPintClick}
          onUpdateClick={this.handleUpdateClick}
        />
    }
    if (this.state.aboutVisible) {
      currentlyVisibleState = <Instructions />
    }
    if (this.state.updateTapVisible) {
      currentlyVisibleState =
        <UpdateTap
          tap={this.state.selectedTap}
          onNewTapCreation={this.handleUpdateTapFormSubmit}
        />
    }

    const controlStyle = {
      width: 'calc(100% - 200px)',
      marginTop: '90px',
      marginLeft: '100px',
      float: 'right',
    }

    return (
      <React.Fragment>
        <NavBar
          onAllKegsClick={this.handleAllKegsClick}
          onAddAKegClick={this.handleAddAKegClick}
          onInstructionsClick={this.handleInstructionsClick} />
        <div style={controlStyle} >
          {currentlyVisibleState}
        </div>
      </React.Fragment>
    )
  }
}

export default TapControl;