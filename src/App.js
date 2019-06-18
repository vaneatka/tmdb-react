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

  getData = (url) =>{
    fetch(`${this.DbApi.URL}${url}${this.DbApi.AUTH_KEY}`)
                                                    .then(response => response.json())
                                                    .then(data => this.setState({movie: data.results})  )
                                                                                            .catch(err=>console.log('error is ',err));
  } 

componentDidMount(){
  this.getData('/movie/popular');
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