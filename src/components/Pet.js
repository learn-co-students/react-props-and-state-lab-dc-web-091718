import React from 'react'


class Pet extends React.Component {

  determineGender() {
    if (this.props.pet.gender === 'male') {
      return "♂"
    }
    else {
      return "♀"
    }
  }

  isAdopted = () => {
    if (this.props.pet.isAdopted === false) {
      return (<button className="ui primary button"
        onClick={() => this.props.onAdoptPet(this.props.pet.id)}
        >
        Adopt pet</button>)
    }
    else {
      return (<button className="ui disabled button">Already adopted</button>)
    }
  }


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {this.determineGender()}
            {/*'♀' OR '♂' need function to return symbols*/}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.isAdopted()}
        </div>
      </div>
    )
  }
}

export default Pet
