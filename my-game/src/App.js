import React, {Component} from 'react';
import TeamCard from './components/Card';
import Score from "./components/Score";
import Header from "./components/Header";
import teams from "./teams.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      highScore: 0,
      currentScore: 0,
      clickedTeams: []
    }
  }

  handleIncrement(id) {
    if (this.state.clickedTeams.indexOf(id) === -1) {
      let currentScore =  this.state.currentScore + 1;
      let highScore = this.state.highScore;
        if(currentScore > highScore) {
          highScore = currentScore
        }
      this.setState({
        currentScore: currentScore,
        highScore: highScore,
        clickedTeams: [id, ...this.state.clickedTeams]
      });
    } else {
      this.setState({
        currentScore: 0,
        clickedTeams:[]
      });
    }
  }
  render() {
    return(
      <div className="container">
        <div className="row">
        <div className="col s12">
          <Score currentScore={this.state.currentScore} highScore={this.state.highScore} />
        </div>
        </div>
        <div className="row">
        <div className="col s12">
          <Header />
        </div>
        </div>
        <div className="row">
        <div className="col s12 teamsView">
          {
            teams
              .sort( () => 0.5 - Math.random())
              .map( x => <TeamCard 
              id= {x.id}
              name= {x.name}
              image= {x.image}
              pick={this.handleIncrement.bind(this)} />)
          }
        </div>
        </div>
      </div>
    )
  }
}

export default App;
