import React, {Component} from 'react';
// import { Router, Route, Switch } from "react-router";
import Header from './components/Header'
import {Container} from 'react-bootstrap';
import DbApi from './services/request'

class App extends Component {
  state = {
    movie: null
  }
  DbApi = new DbApi();

componentDidMount(){
  let data =  this.DbApi.get_popular_movies();
 this.setState({movie: data}); 
 console.log(this.state.movie);
 
}
  
  render(){  
    const {movie} = this.state;
    console.log(this.state.movie)
    return(
      <Container>
        <Header onMovie={movie}/>
      </Container>
    )
  }
}

export default App;