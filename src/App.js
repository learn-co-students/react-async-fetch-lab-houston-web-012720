// create your App component here

import React from 'react'

export default class App extends React.Component{

    constructor(){
        super()
        this.state ={
            people: []
        }
    }


    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then (people => this.setState({
            people: people.people
        }))
    }

    render(){
        return(
            <div>
                {this.state.people.map}
            </div>
        )
    }
}
