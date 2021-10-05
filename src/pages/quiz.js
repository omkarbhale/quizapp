import React from 'react';
import { Redirect } from 'react-router-dom'
import { questions } from '../questions';
import Question from './question';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: this.pickRandomQuestions(),
            currentQuestion: 0,
            score: 0
        }
        this.updateScore = this.updateScore.bind(this)
    }

    pickRandomQuestions() {
        let ques = [];
        for (let i = 0; i < 5; i++) {
            let index = Math.floor(Math.random() * questions.length);
            ques.push(questions[index]);
        }
        return ques;
    }

    updateScore(score, wait) {
        this.setState({
            score: this.state.score + score
        })
        if(wait) {
            setTimeout(() => this.nextQuestion(), 1500);
        } else {
            this.nextQuestion();
        }
    }

    nextQuestion() {
        this.setState({ currentQuestion: this.state.currentQuestion + 1 })
    }

    render() {
        const qindex = this.state.currentQuestion;

        if (qindex >= this.state.questions.length) {
            return (
                // <Redirect push to="/result" params={{correct: this.state.score, total: this.state.questions.length}} />
                <Redirect to={{
                    pathname: '/result',
                    state: { correct: this.state.score, total: this.state.questions.length }
                }} />
            )
        }
        return (
            <div className="container">
                <h1>Test</h1>
                Correct questions: {this.state.score} out of {this.state.questions.length}
                <Question key={qindex} question={this.state.questions[qindex].question} choices={this.state.questions[qindex].choices} correct={this.state.questions[qindex].correct} updateScore={this.updateScore} />
            </div>
        )
    }
}

export default Quiz