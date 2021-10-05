import React from "react";
import {Link} from "react-router-dom";
import "../App.css";

class Result extends React.Component {
    constructor(props) {
        super(props);

        // If visits this link without giving test
        if (!this.props.location.state) {
            this.state = {
                correct: undefined,
                total: undefined
            }
            return;
        }

        this.state = {
            correct: this.props.location.state.correct,
            total: this.props.location.state.total
        }
        // pass params router redirect https://stackoverflow.com/questions/52064303/reactjs-pass-props-with-redirect-component
        if(localStorage.getItem("last-attempt")!=null) {
            localStorage.setItem("secondlast-attempt", localStorage.getItem("last-attempt"));
        }
        setTimeout(() => {
            localStorage.setItem("last-attempt", Date.now().toString());
        }, 10000)
    }

    render() {
        if (this.state.correct == undefined) {
            return (
                <div className="container">
                    <div className="content">
                        <h2>You need to submit your test first :)</h2>
                    </div>
                </div>
            )
        }

        const percentage = this.state.correct / this.state.total * 100;
        if (percentage < 60) {
            return (
                <div className="container">
                    <div className="content">
                        <h2>Sorry, you are not eligible to get best offer. Please try again</h2>
                        Your score: {this.state.correct} out of {this.state.total}
                        <br/>
                        <Link to="/"><button>Try again</button></Link>
                    </div>
                </div>
            )
        }

        let msg = "";
        if (percentage == 100) {
            msg = "Well done!!!"
        } else if (percentage >= 80) {
            msg = "Very good!!!"
        } else if (percentage >= 60) {
            msg = "Very good!!!"
        }

        return (
            <div className="container">
                <div className="content">
                    <h2>{msg}</h2>
                    Your score: {this.state.correct} out of {this.state.total}<br />
                    <button><a href="#">Get offer</a></button>
                </div>
            </div>
        );
    }
}

export default Result;