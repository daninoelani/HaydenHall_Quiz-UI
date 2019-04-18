import React, { Component } from 'react';
import { apiurl } from './config'

class NewUser extends Component {
    state = {
        _id: "",
        name: "",
        score:[]
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        }

    handleSubmit = (event) => {
        event.preventDefault()
        this.newUserInput()
    }
    
    newUserInput = async () => {
        await fetch(`${apiurl}/user`, {
          method: 'POST',
          body: JSON.stringify(this.state)
        })
          .catch(err => console.log(err))
          console.log(this.state.name)
          this.setState({name:""})
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