import React, { Component } from 'react';
import { apiurl } from './config'
// import { Link } from 'react-router-dom'

let id = ''

class NewUser extends Component {
    state = {
        name: "",
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        }

    handleSubmit = async (event) => {
        event.preventDefault()
        await this.newUserInput()
        await this.props.history.push('./Questions', id)
    }
    
    newUserInput = async (results) => {
        await fetch(`${apiurl}/user`, {
          method: 'POST',
          body: JSON.stringify(this.state)
        })
        .then(response => { return response.json()})
        // .then(results =>  {console.log('1newUserInput', results)
        // return results} )
        .then(results => {return id = results._id})
        // .then(id => {console.log('newId', id)})
          .catch(err => console.log(err))
      };

      
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h2>Welcome User!</h2>
                    <p> Do you think you have what it takes to beat this quiz? Enter in your name and begin!</p>
                <input 
                    type='text'
                    name='name'
                    placeholder='First and Last Name'
                    value={this.state.name}
                    onChange={this.handleChange}/>
                <input type='submit'/>
                </div>
            </form>
        )
    }
}

export default NewUser