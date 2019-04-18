import React, { Component } from 'react';
import { apiurl } from './config'

// I want to be able to grab a question and only display one at a time and then display
// the next question when I click a button and then never repeat a question. Once the
// max questions have been reached, in this case 5, then display a victory screen, where
// there will be an update button that will add up all the questions numbers and then 
// to the user a highscore

class Questions extends Component {
    state= {
        score: [0],
        title: "",
        answers:[]
    }
    add1 = () => {
        this.state.score.push(1)
        console.log(this.state.score)
    };

    reduce1 = ()=> {
        const total = (accumulator, currentValue) => accumulator + currentValue;
        const output = this.state.score.reduce(total)
        this.setState({score: [output]})
    };

    add0 = () => {
        this.state.score.push(0)
        console.log(this.state.score)
    };

    //Code above is the first attempt to add to keep track of score
    handleSubmit = async (event) => {
        event.preventDefault()
        await fetch(`${apiurl}/user/${this.props.name}`, {
            method : "PUT",
            body: JSON.stringify(this.state)
        }).then(console.log("updated"))
        .catch(err => console.log(err))
        // .then(button.style.display = "none") Heres an idea to get all the buttons to disappear when clicked! Style doesnt work, button needs to be defined.
    }

    getQuestions = async () => {
        await fetch(`${apiurl}/questions`)
        .then(response => response.json())
        .then(data => data.map(element => (console.log(element))))
        .then(components => this.setState({ title : components } ))
        .catch(err =>console.log(err))
    }

    componentDidMount(){
        this.getQuestions()
    }

    render(){
        // const answers =[this.state.answers]
        // const found = answers.find(function(element) {return element = 0});
        return(
            <div>
                <h3>{this.state.title}</h3>
                <button onClick={this.add1}>Add one into an array</button>
                <button onClick={this.add0}>Add nothing into an array</button>
                <button onClick={this.add0}>Add nothing into an array</button>
                <button onClick={this.add0}>Add nothing into an array</button>
                <h2>{this.state.score}</h2>
                <button onClick={this.reduce1}>Reduce this</button>
                <button onClick={this.handleSubmit}>Update Score</button>
            </div>
        )
    }
}

export default Questions