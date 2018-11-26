import React from 'react'

class Pet extends React.Component {
	handleClick = () => {
		if (!this.props.pet.isAdopted) this.props.onAdoptPet(this.props.pet.id)
	}

	render() {
		return (
			<div className="card">
				<div className="content">
					<a className="header">
						{this.props.pet.gender === 'male' ? '♂' : '♀'}
						{this.props.pet.name}
					</a>
					<div className="meta">
						<span className="date">{this.props.pet.type}</span>
					</div>
					<div className="description">
						<p>Age: {this.props.pet.age}</p>
						<p>Weight: {this.props.pet.weight}</p>
					</div>
					{this.renderAdoptBtns(this.props.pet.isAdopted)}
				</div>



			</div>
		)
	}

	renderAdoptBtns = (isAdopted) => {
		return (<div className="extra content">
			{isAdopted ? (
				<button className="ui disabled button">Already adopted</button>
			) : (
					<button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>)}
		</div >)

	}
}

export default Pet
