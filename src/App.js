import React, {Component} from 'react';
// import { Router, Route, Switch } from "react-router";
import Header from './components/Header'


class App extends Component {
  state = {
    movie: null
  }

  fetchData = () =>{
    fetch('http://tmdb/').then(response => response.json())
                        .then(data=> this.setState({movie:data.results}))
                        .catch(err=> console.log(err));
  }
  async componentDidMount(){
    await this.fetchData();
  }
  
  render(){  
    const {movie} = this.state;
    console.log(movie);
    
    return(
      <div>
        <Header onMovie={movie ? movie: 'loading'} />
      </div>
    )
  }
}

export default App;