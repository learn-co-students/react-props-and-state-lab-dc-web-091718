import React from 'react'

import Pet from './Pet'

export default class PetBrowser extends React.Component {
	renderPet(pet){
		let {type,gender,age,weight,name,isAdopted} = pet
		return <div> <h4> {name} </h4> <h4> {age} </h4> <h4> {type} </h4> <h4> {weight} </h4></div>
		
		}
	

  render() {
    return (<div className="ui cards">
    	{this.props.pets.map((pet)=> this.renderPet(pet))}
    	</div>)
  }
}



