import React, {Component} from 'react';
// import { Router, Route, Switch } from "react-router";
import Header from './components/Header'
import {Container} from 'react-bootstrap';
import DbApi from './services/request'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Movie from './components/Movie'


class App extends Component {
  state = {
    movie: null,
    movieGenres: null, 
    tvGenres: null
  }
  DbApi = new DbApi();



componentDidMount(){
  let popMovies = this.DbApi.getAllPopularMovies();
  popMovies.then(data => this.setState({movie: data}));
  let movieGenres = this.DbApi.geMovieGenres();
  movieGenres.then(data => this.setState({movieGenres: data}));
  let tvGenres = this.DbApi.getTvGenres();
  tvGenres.then(data => this.setState({tvGenres: data}));  
}  


  render(){  
    const {movie, movieGenres, tvGenres} = this.state;
    
    return(
        <Router>
          <Container>
            <Header onMovie={movie} movieGenres = {movieGenres} tvGenres = {tvGenres}/>
            <Route path="/movie/:id" component={Movie} />  
          </Container>
        </Router>
    )
  }
}

export default App;