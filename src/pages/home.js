import React from "react";
import { Link } from 'react-router-dom';
import "../App.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    isAttemptValid() {
        let last = Number(localStorage.getItem("last-attempt")) || 0;
        let secondLast = Number(localStorage.getItem("secondlast-attempt")) || 0;
        let now = Date.now();
        if(now - last > 86400000 || now - secondLast > 86400000) {
            return true;
        }
        return false;
    }

    render() {
        if(!this.isAttemptValid())
            return(
                <div className="container">
                    <div className="content">
                        <h2>You have reached the daily limit for number of test attemps.</h2>
                        <h2>Please try again tomorrow.</h2>
                    </div>
                </div>
            );

        return(
            <div className="container">
                <div className="content">
                    <h2>Take quiz to win the best offer at Upcloud Technology.</h2>
                    <Link to="/quiz"><button>Start Quiz</button></Link>
                </div>
            </div>
        );
    }
}

export default Home;