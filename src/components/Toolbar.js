import React, { Component } from 'react'
import Button from './Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class Toolbar extends Component {
  constructor() {
    super();

    this.state = {
      dropDownValueYear: "Select Year",
      dropDownValueCrime: "Select Crime"
    }
  }
  click = () => {
    this.props.parentMethod();
  }

  changeValue(text) {
    this.setState({dropDownValueYear: text})
  }

  changeValueCrime(text) {
    this.setState({dropDownValueCrime: text})
  }

  render() {
    return (
      <div id="toolbar">
        <Button text="Map"/>
        <Button text="Statistics"/>

        <div className="d-flex">
          <div className="vr" style={{currentColor: 'white'}}></div>
        </div>

        <DropdownButton className="dropdown-basic-button" id="year-dropdown" menuVariant="dark" drop="right" title={this.state.dropDownValueYear}>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>ALL</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2022</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2021</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2020</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2019</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2018</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2017</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2016</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2015</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2014</div></Dropdown.Item>
        </DropdownButton>

        <DropdownButton  className="dropdown-basic-button" id="year-dropdown" menuVariant="dark" drop="right" title={this.state.dropDownValueCrime}>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>ALL</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>ASSAULT</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>BURGLARY</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>HOMICIDE</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>MOTOR VEHICLE THEFT</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>ROBBERY</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>SEXUAL ABUSE</div></Dropdown.Item>
        </DropdownButton>

        <button id="apply-btn" onClick={this.click}>Apply</button>
      </div>
    )
  }
}

export default Toolbar;