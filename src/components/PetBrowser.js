import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

	render() {
		return <div className="ui cards">{this.renderPets()}</div>
	}

	renderPets = () => {
		return this.props.pets.map(pet => {
			return <Pet pet={pet} key={pet.id} name={pet.name} type={pet.type} age={pet.age} weight={pet.weight} gender={pet.gender} id ={pet.id} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/>
		})
	}
}

export default PetBrowser
