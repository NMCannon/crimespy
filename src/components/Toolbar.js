import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class Toolbar extends Component {
  constructor() {
    super();

    this.state = {
      year: "Select Year",
      crime: "Select Crime",
      stattype: "Chart",
      map: false,
      about: false
    }

    this.changeValueAbout = this.changeValueAbout.bind(this);
  }
  // Call parent method
  applyFilter = () => {
    this.setState({about: false})
    this.props.parentMethod();
  }

  // Set map value to true and update dropdown title
  mapChangeTrue = () => {
    this.setState({map: true})
    this.setState({stattype: "Map"})
    this.setState({about: false})
  }

  // Set map value to false and update dropdown title
  mapChangeFalse = () => {
    this.setState({map: false})
    this.setState({stattype: "Chart"})
    this.setState({about: false})
  }

  // Update year select dropdown title
  changeValueYear(text) {
    this.setState({year: text})
    this.setState({about: false})
  }

  // Update crime select dropdown title
  changeValueCrime(text) {
    this.setState({crime: text})
    this.setState({about: false})
  }

  // Update about state and call parent method
  changeValueAbout() {
    this.setState({about: true})
    this.props.parentMethod();
  }

  // Render toolbar
  render() {
    return (
      <div id="toolbar-container">
        <div id="toolbar">
          <DropdownButton  className="dropdown-basic-button" id="year-dropdown" menuVariant="dark" drop="right" title={this.state.stattype}>
            <Dropdown.Item><div onClick={this.mapChangeFalse}>Chart</div></Dropdown.Item>
            <Dropdown.Item><div onClick={this.mapChangeTrue}>Map</div></Dropdown.Item>
          </DropdownButton>

          <div className="d-flex">
            <div className="vr" style={{currentColor: 'white'}}></div>
          </div>

          <DropdownButton className="dropdown-basic-button" id="year-dropdown" menuVariant="dark" drop="right" title={this.state.year}>
            <Dropdown.Item><div onClick={(e) => this.changeValueYear(e.target.textContent)}>Forecast</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueYear(e.target.textContent)}>2021</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueYear(e.target.textContent)}>2020</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueYear(e.target.textContent)}>2019</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueYear(e.target.textContent)}>2018</div></Dropdown.Item>
          </DropdownButton>

          <DropdownButton  className="dropdown-basic-button" id="year-dropdown" menuVariant="dark" drop="right" title={this.state.crime}>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>NONE</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>ASSAULT</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>BURGLARY</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>HOMICIDE</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>MOTOR VEHICLE THEFT</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>ROBBERY</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>SEXUAL ASSAULT</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>THEFT</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>ALL</div></Dropdown.Item>
          </DropdownButton>

          <button id="apply-btn" onClick={this.applyFilter}>Apply</button>
          <div className="d-flex">
            <div className="vr" style={{currentColor: 'white'}}></div>
          </div>
          <button id="about-btn" onClick={this.changeValueAbout}>About</button>
        </div>
      </div>
    )
  }
}

export default Toolbar;