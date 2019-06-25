import React, {Component} from 'react';
// import { Router, Route, Switch } from "react-router";
import Header from './components/Header'
import {Container} from 'react-bootstrap';
import DbApi from './services/request'


class App extends Component {
  state = {
    movie: null,
    movieGenres: null, 
    tvGenres: null    
  }

  DbApi = new DbApi();

movieGenresUpload=()=>{   
  let movieGenres = this.DbApi.geMovieGenres();
  movieGenres.then(data => this.setState({movieGenres: data}));
}

tvGenresUpload=()=>{
  let tvGenres = this.DbApi.getTvGenres();
  tvGenres.then(data => this.setState({tvGenres: data}));  
}

componentDidMount(){
  let popMovies = this.DbApi.getAllPopularMovies();
  popMovies.then(data => this.setState({movie: data}));
   
}  


  render(){  
    const {movie, movieGenres, tvGenres} = this.state;
    
    return(
        
          <Container>
            <Header onMovie={movie} 
            movieGenres = {movieGenres} 
            tvGenres = {tvGenres}
            movieGenresUpload = {this.movieGenresUpload}
            tvGenresUpload = {this.tvGenresUpload}
            />                    
          </Container>
        
    )
  }
}

export default App;