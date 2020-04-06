import React from 'react'

export default class App extends React.Component {

  constructor(){
    super()
    this.state = ({
      astros: []
    })
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(astroData => {
      console.log("astroData", astroData)
      this.setState({
        astros: astroData.people
      })
    })
  }

  showAstro = (astro) => {
    return (
      <li>{astro.name}</li>
    )
  }
   
  render(){
    console.log("render", this.state)
    return(
      <ul> 
        {this.state.astros.map(astro => this.showAstro(astro))}
      </ul>
    )
  }

}