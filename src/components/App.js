import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (type) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type
      }
    })
  };

//getting all pets from data
fetchAllPets = () => {
  fetch(`/api/pets`)
  .then(res => res.json())
  .then(pets => this.setState({ pets }))
};

//getting pets that were selected
fetchPetsByType = type => {
  if (this.state.filters.type === "all") {
    this.fetchAllPets();
  }else {
    fetch(`/api/pets?type=${type}`)
    .then(res => res.json())
    .then(pets => this.setState({ pets }))
  }
};

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                fetchPets={() => this.fetchPetsByType(this.state.filters.type)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser petProps={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
