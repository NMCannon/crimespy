import React, { Component } from 'react'

class Charts extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      year: null,
      crime: null,
      map: false,
      about: false
    }
  }

  // Update state
  changeState = (newyear, newcrime, newmap, newabout) => {
    this.setState({year: newyear});
    this.setState({crime: newcrime});
    this.setState({map: newmap});
    this.setState({about: newabout});
  }

  render() {
    if(this.state.about===true)
    {
      return (
        <div id="chart-area">
          <p>CrimeSpy was developed using ReactJS. The datasets used to generate these predictions were aqquired from opendata.gc.gov.</p>
          <p><a href="https://opendata.dc.gov/search?collection=Dataset">CRIME DATASETS</a>
          </p>
        </div>
      )
    }
    // If map value is true
    if(this.state.map===true)
    {
      // Check selected year and display appropriate map
      switch(this.state.year)
      {
        case "2021":
        default:
          return (
            <div id="chart-area">
              <h1>Washington D.C</h1>
              <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2021map_all.html"></iframe>
            </div>
          )
        case "2020":
          return (
            <div id="chart-area">
              <h1>Washington D.C</h1>
                <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2020map_all.html"></iframe>
            </div>
          )
        case "2019":
          return (
            <div id="chart-area">
              <h1>Washington D.C</h1>
                <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2019map_all.html"></iframe>
            </div>
          )
        case "2018":
          return (
            <div id="chart-area">
              <h1>Washington D.C</h1>
              <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2018map_all.html"></iframe>
            </div>
          )
        }
    }

    // Else check selected year and display appropriate chart
    switch(this.state.year)
    {
      case "Forecast":
        return (
          <div id="chart-area">
            <h1>Washington D.C</h1>
            <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2010-2025chart_all.html"></iframe>
          </div>
        )
      case "2021":
      default:
        return (
          <div id="chart-area">
            <h1>Washington D.C</h1>
            <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2021chart_all.html"></iframe>
          </div>
        )
      case "2020":
        switch(this.state.crime)
        {
          case "NONE":
          default:
            return (
              <div id="chart-area">
                <h1>Washington D.C</h1>
                  <iframe title="2020-1" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2020chart_all.html"></iframe>
              </div>
            )
          case "ALL":
            return (
              <div id="chart-area">
                <h1>Washington D.C</h1>
                  <iframe title="2020-2" width="100%" height="650" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/1.embed"></iframe>
              </div>
            )
          case "ASSAULT":
            return (
              <div id="chart-area">
                <h1>Washington D.C</h1>
                  <iframe title="2020-3" width="100%" height="650" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/16.embed"></iframe>
              </div>
            )
          case "BURGLARY":
            return (
              <div id="chart-area">
                <h1>Washington D.C</h1>
                  <iframe title="2020-4" width="100%" height="650" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/14.embed"></iframe>
              </div>
            )
          case "HOMICIDE":
            return (
              <div id="chart-area">
                <h1>Washington D.C</h1>
                  <iframe title="2020-5" width="100%" height="650" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/13.embed"></iframe>
              </div>
            )
          case "MOTOR VEHICLE THEFT":
            return (
              <div id="chart-area">
                <h1>Washington D.C</h1>
                  <iframe title="2020-6" width="100%" height="650" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/17.embed"></iframe>
              </div>
            )
          case "ROBBERY":
            return (
              <div id="chart-area">
                <h1>Washington D.C</h1>
                  <iframe title="2020-7" width="100%" height="650" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/19.embed"></iframe>
              </div>
            )
          case "SEXUAL ASSAULT":
            return (
              <div id="chart-area">
                <h1>Washington D.C</h1>
                  <iframe title="2020-8" width="100%" height="650" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/15.embed"></iframe>
              </div>
            )
          case "THEFT":
            return (
              <div id="chart-area">
                <h1>Washington D.C</h1>
                  <iframe title="2020-9" width="100%" height="650" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/18.embed"></iframe>
              </div>
            )
        }
      case "2019":
        return (
          <div id="chart-area">
            <h1>Washington D.C</h1>
              <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2019chart_all.html"></iframe>
          </div>
        )
      case "2018":
        return (
          <div id="chart-area">
            <h1>Washington D.C</h1>
              <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2018chart_all.html"></iframe>
          </div>
        )
      }
  }
}

export default Charts;