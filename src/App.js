import React, {Component} from 'react';
import { Router, Route, Switch } from "react-router";
import Header from './components/Header'


class App extends Component {
  state = {
    movie: null
  }

componentDidMount(){
  fetch('http://tmdb/')
          .then(response=> response.json())
          .then(response => this.setState({movie: response.results}))
          .catch(error => {
            alert('Ошибка при получении списка новостей');
            console.error(error);
})}
  
  render(){  
    console.log(this.state);
    
    return(
      <div>
        <Header onMovie={this.state.movie} />
      </div>
    )
  }
}

export default App;