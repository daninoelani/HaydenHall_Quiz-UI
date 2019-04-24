import React, { Component } from 'react';
import { apiurl } from './config'
import "../src/I_styling/Home.css"

class Home extends Component {
    state = {
        name: '',
        score: []
    }
    getUsers = async () => {
        await fetch(`${apiurl}/user`)
        .then(response => response.json())
        .then(data => data.map(element => <h3 key={element._id}>{element.name}</h3>))
        .then(components => this.setState({ name : components}))
        .catch(err =>console.log(err))
    }

    // showUsers = () => {
    //     <li>{this.state.name}</li>
    // }
    componentDidMount(){
        this.getUsers()
    }

    render(){
        return (
            <div>
                <h2>
                    People who have taken this Quiz!
                </h2>
                <ul>
                    <li>{this.state.name}</li>
                </ul>
                


            </div>
        )
    }
}

export default Home