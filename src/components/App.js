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

  onChangeType = (e) => {
    // debugger;
    let el = e.target.value

    this.setState({
    filters: { type: el }
  })
}

onFindPetsClick = () => {
  let promise = this.state.filters.type == 'all' ? fetch(`/api/pets`) : fetch(`/api/pets?type=${this.state.filters.type}`)
  promise.then(resp => resp.json()).then(json =>
    this.setState({ pets: json})
   
   )
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
              <PetBrowser pets={this.state.pets}  />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
