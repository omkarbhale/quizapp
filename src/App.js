import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './pages/home'
import Quiz from './pages/quiz'
import Result from './pages/result';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home/>}></Route>
          <Route exact path="/quiz" component={() => <Quiz/>}></Route>
          <Route exact path="/result" component={(props) => <Result {...props} />}></Route>
        </Switch>
      </Router>
    )
  }
  // render() {
  //   return (
  //     <div>
  //       <h1>Test</h1>
  //       <Quiz end={this.endQuiz} />
  //     </div>
  //   )
  // }
}

export default App;
