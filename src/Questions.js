import React, { Component } from 'react';
import { apiurl } from './config'
import DisplayQuestions from './DisplayQuestions'
// I want to be able to grab a question and only display one at a time and then display
// the next question when I click a button and then never repeat a question. Once the
// max questions have been reached, in this case 5, then display a victory screen, where
// there will be an update button that will add up all the questions numbers and then 
// to the user a highscore

class Questions extends Component {
    state= {
        questions: [],
        score: 0,
        title: "",
        answers:[],
        
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

    handleScore = (event) => {
        console.log("event.target.value", parseInt(event.target.value))
        let newScore = this.state.score + parseInt(event.target.value)
        return this.setState({score: newScore})
    }

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
        // .then(response => console.log("response", response))
        .then(response => this.setState({questions: [...response]}))
        .then(this.mapQuestions)
        // .then(this.state.questions.map(element => this.setState({ answers: element.Answers})))
        // .then(data => data.map(element => this.setState({ title : element.Title, answers: element.Answers})))
        // .then(this.state.answers.map(answer => <button>{Object.keys(answer)}</button>))
        // .then(components => this.setState({ title : components } ))
        .catch(err =>console.log(err))
    }

    mapQuestions = () => {
        console.log('mapQuestions this.state', this.state)
        // this.state.questions.map(element => this.setState({ answers: element.Answers}))
    }

    componentDidMount(){
        this.getQuestions()
    }

    render(){

        console.log(this.state.score)

        // const answerOption = this.state.answers.map(
        //     answer => <button key= {Object.keys(answer)} value={Object.values(answer)} onClick= {this.handleScore} >{Object.keys(answer)}</button>)
    
        const mapQuestionsToComponent = this.state.questions.map(
            question => <div key={question._id}>
                <h4>Question id:  {question._id}</h4>
                {question.Title.map(title => <p key={Object.keys(title)}>{Object.keys(title)}</p>)}
                {question.Answers.map(answer => <button key= {Object.keys(answer)} value={Object.values(answer)} onClick= {this.handleScore} >{Object.keys(answer)}</button>)}
            </div>)

        const mapQ2 = this.state.questions.map(
            question => <DisplayQuestions key={question._id} question={question}/>
        )

        // const answers =[this.state.answers]
        // const found = answers.find(function(element) {return element = 0});
        return(
            <div>
                <h3>{this.state.title}</h3>
                {/* <button onClick={this.add1}>Add one into an array</button>
                <button onClick={this.add0}>Add nothing into an array</button>
                <button onClick={this.add0}>Add nothing into an array</button>
                <button onClick={this.add0}>Add nothing into an array</button>
                <button onClick={this.reduce1}>Reduce this</button>
                <button onClick={this.handleSubmit}>Update Score</button> */}
                <h2>Your Score: {this.state.score}</h2>

                {/* {answerOption} */}
                {mapQuestionsToComponent} 

                <h1>New! mapQ2</h1>
                {mapQ2}


            </div>
        )
    }
}

export default Questions