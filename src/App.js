import React, {Component} from 'react';
import { Router, Route } from "react-router-dom";
import Header from './components/Header'
import {Container} from 'react-bootstrap';
import DbApi from './services/request';
import SingleMovie from './components/SingleMovie';
import  { createBrowserHistory } from "history";
import Movie from './components/Movie';
import TV from './components/TV';
import Main from './components/Main';



class App extends Component {
  state = {
    movie: null,
    movieGenres: null, 
    tvGenres: null    
  }
  history = createBrowserHistory();
  
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
            <Router history = {this.history}>
            <Header onMovie={movie} 
            movieGenres = {movieGenres} 
            tvGenres = {tvGenres}
            movieGenresUpload = {this.movieGenresUpload}
            tvGenresUpload = {this.tvGenresUpload}
            /> 
            <Route exact path="/" component={Main}/>               
            <Route path="/movie/:id" component={props=><Movie movie = {movie}{...props}/>  } />  
            <Route path="/tv/:id" component={props=><TV movie = {movie}{...props}/>  } />  
            <Route path="/showmovie/:id" component={(props)=><SingleMovie movie = {movie}{...props}/>} /> 
            </Router>   
          </Container>
        
    )
  }
}

export default App;