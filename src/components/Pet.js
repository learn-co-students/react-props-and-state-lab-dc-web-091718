import React from 'react'
class Pet extends React.Component {
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

    let pet1 = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet1.gender === 'male'  ? '♂' : '♀'}
            {pet1.name}
          </a>
          <div className="meta">
            <span className="date">{pet1.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet1.age}</p>
            <p>Weight: {pet1.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {pet1.isAdopted ? (<button className="ui disabled button">Already adopted</button>) : (<button className="ui primary button" onClick={() => this.props.onAdoptPet(pet1.id)}>Adopt pet</button>)}

        </div>
      </div>
    )
  }
}

export default Pet
