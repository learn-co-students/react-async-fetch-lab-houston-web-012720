// create your App component here
import React , {Component} from 'react'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            peoples: []
        }
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(peoples => this.setState({peoples: peoples.people}))
    }


    render(){
        return(
            <div>
                {this.state.peoples.map(people => people.name)}
            </div>
        )
    }
}