import React from "react";
import './question.css'

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: props.question,
            choices: props.choices,
            correct: props.correct,
            selected: -1,
            remainingTime: 10000
        }
        this.updateScore = props.updateScore;
        this.timer = setInterval(() => {
            if(this.state.remainingTime == 0) {
                this.selectOption(-1, false);
                clearInterval(this.timer);
            }
            this.setState({remainingTime: this.state.remainingTime - 1000})
        }, 1000);
    }

    selectOption(optionIndex, wait) {
        this.setState( { selected: optionIndex } )
        clearInterval(this.timer);
        this.updateScore(optionIndex == this.state.correct ? 1 : 0, wait);
    }

    render() {
        let options = this.state.choices.map((choice, i) => {
            let classname = "normal"
            if(this.state.selected != -1) {
                if(i == this.state.correct) {
                    classname = "correct";
                } else if(i == this.state.selected) {
                    classname = "wrong"
                }
            }
            return <button className={classname} key={i} onClick={() => this.selectOption(i, true)}>{choice}</button>
        })
        return(
            <div className="question">
                <p>Remaining Time: {Math.floor(this.state.remainingTime/1000)}</p>
                <h2>{this.state.question}</h2>
                <div className="column">
                    {options}
                </div>
            </div>
        );
    }
}

export default Question