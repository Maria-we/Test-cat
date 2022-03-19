import React, {Component} from "react";
import './App.css';
import Container from './Container';

class App extends Component {
  constructor(){
      super();
      this.state = {
          photo: []
      };
  }
  
  componentDidMount(){
      fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1")
      .then(response => {
        //console.log('response', response);
        if(!response.ok){
          throw Error('Error...');
        }
        return response.json()
      .then(allData => {
        this.setState({photo: allData});
      })
      .catch(err => {
        throw Error(err.message);
      });
    });
  }

  render(){
      return(
          <div className="App">
            <h1>Your cats!</h1>
            <Container photo={this.state.photo} />
          </div>
      );
  }
}

export default App;