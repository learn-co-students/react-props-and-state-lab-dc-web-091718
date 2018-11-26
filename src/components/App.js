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

	handleChangeFilter = (filter) => {
		this.setState({filters: filter})
	}

	handlePetsClick = () => {
		let url = '/api/pets'
		let filter = this.state.filters.type
		if (filter !== 'all')  { url += ('?type=' + filter) }
		
		fetch(url)
			.then(resp => resp.json())
			.then(json => this.setState({pets: json}))
	}

	handleAdoptPet = (id) => {
		let updatedPets = this.state.pets.map(pet => {
			if (pet.id === id) pet.isAdopted = true
			return pet
		})
		this.setState({pets : updatedPets})


		
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
							<Filters onChangeType={this.handleChangeFilter} onFindPetsClick={this.handlePetsClick}/>
						</div>
						<div className="twelve wide column">
							<PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
