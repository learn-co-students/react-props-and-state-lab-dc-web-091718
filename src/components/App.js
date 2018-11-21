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

  onChangeType = (event) => {
    this.setState({
      filters: {...filters, type:event.target.value}
    })
  }
  onFindPetsClick = () => {
    let query = (this.state.filters.type == 'all')? "" : `?type=${this.state.filters.type}`
    fetch(`/api/pets${query}`).then(res => res.json()).then(petsArr => this.setState({ pets: petsArr  }));
  }

  onAdoptPet = (id) => {
    let update = this.state.pets
    update=update.map(p => {
      return p.id === id ? { ...p, isAdopted: true } : p;
    });
    this.setState({
      pets: update
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
