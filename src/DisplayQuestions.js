import React, { Component } from 'react';


let index = 0

class DisplayQuestions extends Component {
    // constructor(props){
    //     super(props)
    // }
    // questionOptionsFuncVers = async (props) => {
    //     await this.props.map(question => <h3 key={Object.keys(question)} 
    //     value={Object.values(question)}>{Object.keys(question)}</h3>)
    //     console.log(props)
    // }
    
    render() {
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

        // console.log("props", this.props)
        // console.log("value", this.props.question.Answers)
        
        // let answerVal = 0
        // console.log("answerVal", answerVal)
        
        var styleNew = [
            {background: 'grey'},
            {background: 'blue'},
            {background: 'green'},
            {background: 'orange'},
            {background: 'red'},
            {color: 'green'},
        ];

        const answerClick = (answerVal) => {
            // console.log("DisplayQuestions answerClick", answerVal)
            if(index !== this.props.count-1)
            {
            this.props.handleScore(answerVal)
            index++
        }
        else if (index === this.props.count-1){ 
            this.props.handleScore(answerVal)
            // console.log('update score')
            index++

            // return this.props.userScoreResults() 
        }

            // return answerVal
        }

        

        const OneAtATime = () => {
            
            if (this.props.index === index ) {
                // console.log("count", this.props.count, "index", index)
                let styleCount = styleNew[index]
                // console.log("DisplayQuestions index", this.props.index)
                return <div style={styleCount}>
                    <h4>ID:{this.props.question._id}</h4>
                <h4>Index:{this.props.index}</h4>
                <h4>{this.props.question.Title}</h4>
                {this.props.question.Answers.map(
                    answer => <button
                        key={Object.keys(answer).toString()}
                        value={Object.values(answer).toString()}
                        onClick={
                            (event) => {
                                // let answerVal = event.target.value
                                answerClick(event.target.value)
                                    // console.log("answer", answer),
                                    // console.log("onClick", answerVal),                                   
                            }
                        }
                    >
                        {Object.keys(answer).toString()}
                    </button>
                )}
                </div>
            }else if (index === this.props.count) {
                // console.log("done 1")
                this.props.userScoreResults() 
                index = 0
                return null
            }
            return null
        }

        // return (
        //     <div>
        //         <h2>THIS IS THE NEW </h2>
        //         <OneAtATime/>
        //         <h2>THIS IS THE OLD </h2>
        //         {/* {QO} Throwing an error*/}
        //         {/* {answerOptions} */}
        //         <h4>ID:{this.props.question._id}</h4>
        //         <h4>Index:{this.props.index}</h4>
        //         <h4>{this.props.question.Title}</h4>
        //         {this.props.question.Answers.map(
        //             answer => <button
        //                 key={Object.keys(answer).toString()}
        //                 value={Object.values(answer).toString()}
        //                 onClick={
        //                     (event) => {
        //                         // let answerVal = event.target.value
        //                         answerClick(event.target.value)
        //                             // console.log("answer", answer),
        //                             // console.log("onClick", answerVal),                                   
        //                     }
        //                 }
        //             >
        //                 {Object.keys(answer).toString()}
        //             </button>
        //         )}
        //         {/* <h4>Score: {this.props.score}</h4> */}
        //         {/* <button onClick={this.props.reduce1}>Reduce this</button>
        //         <button onClick={this.props.add1}>add 1</button>
        //         <button onClick={this.handleSubmit}>Update Score</button> */}

        //     </div>
        // )
        //end of return

        return <OneAtATime/>
    }
}

export default DisplayQuestions