import React, { Component } from 'react';

class DisplayQuestions extends Component {
    constructor(props){
        super(props)
    }
    questionOptionsFuncVers = async (props) => {
        await this.props.map(question => <h3 key={Object.keys(question)} 
        value={Object.values(question)}>{Object.keys(question)}</h3>)
        console.log(props)
    }
    render(){
        // const test = Questions.getQuestions.find( test => {
        //     return test.id === parseInt(this.props)
        // })


        // const answerOptions = this.props.state.answers.map(
        //     answer => <button key={Object.keys(answer)} 
        //     value={Object.values(answer)} onClick={this.add1}>
        //     {Object.keys(answer)}</button>)
        //This function is mapping the information from the database and
        // grabbing iys informations. -_-works in Questions-_- Same thing
        // as function below.|
        //                   V
        
        
        // const questionsOptions = this.props.title.map(
        //     question => <h3 key={Object.keys(question)} 
        //     value={Object.values(question)}>{Object.keys(question)}</h3>)
            
        // console.log("props", this.props.title)
        return(
            <div>
                {/* {QO} Throwing an error*/} 
                {/* {answerOptions} */}
                <h2>{this.props.score}</h2>
                <button onClick={this.props.reduce1}>Reduce this</button>
                <button onClick={this.props.add1}>add 1</button>
                <button onClick={this.handleSubmit}>Update Score</button>
                
            </div>
        )
    }
}

export default DisplayQuestions