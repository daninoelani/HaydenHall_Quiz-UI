import React, { Component } from 'react';
import { apiurl } from './config'
import DisplayQuestions from './DisplayQuestions'
// I want to be able to grab a question and only display one at a time and then display
// the next question when I click a button and then never repeat a question. Once the
// max questions have been reached, in this case 5, then display a victory screen, where
// there will be an update button that will add up all the questions numbers and then 
// to the user a highscore

// let answerVal = 0
// console.log("answerVal", answerVal)

class Questions extends Component {
    state = {
        questions: [],
        answers: [],
        title: "",
        score: 0,
    }

    handleScore = (someVal) => {
        // console.log('Questions handleScore', someVal, 'id', this.props.location.state) // id undefined here
        let newScore = this.state.score + parseInt(someVal)
        return this.setState({ score: newScore })
    }

    QuestionsAnswerClick = (answerVal) => {
        // console.log("Questions answerClick", answerVal)
        this.handleScore(answerVal)
    }

    getQuestions = async () => {
        // console.log('Questions getQuestions id', this.props.location.state)  // id undefined here
        await fetch(`${apiurl}/questions`)
            .then(response => response.json())
            .then(response => this.setState({ questions: [...response] }))
            .catch(err => console.log(err))
    }

    // working on update for user score results
    userScoreResults = async () => {
        // console.log('Questions this.state.score', this.state.score)
        let id = this.props.location.state._id
        let body = {
            "name": this.props.location.state.name,
            "score": this.state.score
        }
        // console.log("body", body)
        await fetch(`${apiurl}/user/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body)
        })
        .then(setTimeout(() => { this.props.history.replace('./') }, 1000))
    }


    componentDidMount() {
        this.getQuestions()
    }

    render() {
        console.log('Questions this.props.history', this.props.history)
        console.log("Questions this.props.location.state", this.props.location.state)

        var styleNew = [
            { background: 'grey' },
            { background: 'blue' },
            { background: 'green' },
            { background: 'orange' },
            { background: 'red' },
            { color: 'green' },
        ];

        // const mapQuestionsToComponent = this.state.questions.map(
        //     (question, index) => <div style={styleNew[index]} key={question._id}>
        //         <h4>Question id:  {question._id}</h4>
        //         <h3>{question.Title}</h3>
        //         {question.Answers.map(answer => <button key={Object.keys(answer)} value={Object.values(answer)}
        //             onClick={
        //                 (event) => {
        //                     this.QuestionsAnswerClick(event.target.value)
        //                 }
        //             }
        //         >
        //             {Object.keys(answer)}
        //         </button>)}
        //     </div>)


        const mapQ2 = this.state.questions.map(
            (question, index) => <DisplayQuestions 
            key={question._id} 
            id={question._id} 
            question={question} 
            index={index} 
            count={this.state.questions.length} 
            handleScore={(someValue) => {/*alert(someValue);*/this.handleScore(someValue) }} 
            userScoreResults={(userScore)=> {this.userScoreResults(userScore)}}
            />
        )


        return (
            <div>
                <h2 style={styleNew[this.state.score]}>Your Score: {this.state.score}</h2>

                {/* {mapQuestionsToComponent} */}

                <h1>New! mapQ2</h1>
                {mapQ2}


            </div>
        )
    }
}

export default Questions