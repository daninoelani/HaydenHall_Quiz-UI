import React, { Component } from 'react';
import { apiurl } from './config'
import "../src/I_styling/Home.css"


class Home extends Component {
    state = {
        users: []
    }
    getUsers = async () => {
        await fetch(`${apiurl}/users`)
            .then(response => response.json())
            .then(users => this.setState({ users: users }))
            .catch(err => console.log(err))
    }

    deleteUser = async (id) => {
        console.log('deleteUser:', id)
        await fetch(`${apiurl}/user/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                this.getUsers()
            })
            .catch(err =>
                console.log(err))
    }

    // takeQuiz = async (id) => {
    //     console.log('history', id) // id is correct here
    //     // redirect to questions and pass in the id
    //     // should be able to apply to new user
    //     await 
    //     await this.props.history.push('./Questions', id)
    // }

    takeQuiz = (user) => {
        console.log('takeQuiz id', user) // id is correct here
        // redirect to questions and pass in the id
        // should be able to apply to new user
         
         this.props.history.push('./Questions', user)
    }



    componentDidMount() {
        // console.log('Home componentDidMount')
        this.getUsers()
    }

    render() {
        // console.log('this.props.history', this.props.history)
        const userView = this.state.users.map(user =>
            <div key={user._id}>
                <h3>Name: {user.name} Score: {user.score}</h3>
                <button onClick={event => {this.takeQuiz(user)}}>Retake Quiz</button>
                <button onClick={event => {this.deleteUser(user._id)}}>Delete</button>
            </div>
        )


        return (
            <div>
                <h2>People who have taken this Quiz!</h2>

                {userView}


            </div>
        )
    }
}

export default Home