import React, { Component } from 'react';
import { apiurl } from './config'
import DisplayQuestions from './DisplayQuestions'

// There should be a question component that takes in a single question object from the database and the question component will parse out whatever you want to display.
// for each question you have a questions component This file is the parent to the single questions component
// just some minor refactoring is going to happen. Look at the individual pokemon presenter to get an idea.

class Questions extends Component {
    state= {
        score: [0],
        title: [],
        answers:[]
    }

    add1 = (event) => {
        if (event.target.value === "1"){
            this.state.score.push(1)
        }   else {
            this.state.score.push(0)
        }
    };

    reduce1 = ()=> {
        const total = (accumulator, currentValue) => accumulator + currentValue;
        const output = this.state.score.reduce(total)
        this.setState({score: [output]})
    };
    
    // handleSubmit = async (event) => {
    //     event.preventDefault()
    //     await fetch(`${apiurl}/user/${this.props.name}`, {
    //         method : "PUT",
    //         body: JSON.stringify(this.state)
    //     }).then(console.log("updated"))
    //     .catch(err => console.log(err))
    //     // .then(button.style.display = "none") Heres an idea to get all the buttons to disappear when clicked! Style doesnt work, button needs to be defined.
    // }

    getQuestions = () => {
        fetch(`${apiurl}/questions`)
        .then(response => response.json())
        .then(data => data.map(element => this.setState({ title : element.Title, answers: element.Answers})))
        .then(()=> console.log(" State", this.state))
        // .then(components => this.setState({ title : components } ))
        .catch(err =>console.log(err))
    }

    componentDidMount(){
        this.getQuestions()
    }

    render(){
        // const answerOptions = this.state.answers.map(
        //     answer => <button key={Object.keys(answer)} 
        //     value={Object.values(answer)} onClick={this.add1}>
        //     {Object.keys(answer)}</button>)
        
        // const questionsOptions = this.state.title.map(
        //     question => <h3 key={Object.keys(question)} 
        //     value={Object.values(question)}>{Object.keys(question)}</h3>)
            
        // console.log("questionOptions", Object.values(questionsOptions))
        // console.log("state",this.state)
         return(
            <div>
                {/* {questionsOptions}
                {answerOptions}
                <h2>{this.state.score}</h2>
                <button onClick={this.reduce1}>Reduce this</button>
                <button onClick={this.handleSubmit}>Update Score</button> */}
                <DisplayQuestions/>
              
            </div>
        )
    }
}

export default Questions