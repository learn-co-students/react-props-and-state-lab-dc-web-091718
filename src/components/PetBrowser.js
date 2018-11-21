import React from 'react'

import Pet from './Pet.js'

export default class PetBrowser extends React.Component {
	
		
	
  render() {
    return (<div className="ui cards">
    	{this.props.pets.map((pet) => <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />)}
    	</div>)
  }
}



