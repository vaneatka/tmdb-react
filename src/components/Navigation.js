import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Spinner} from 'react-bootstrap';
import {  Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Movie from './Movie';
import TV from './TV';
import Main from './Main';
import SingleMovie from './SingleMovie'
export default class Navigation extends Component {


    render(){
        const {movieGenres, tvGenres,movieGenresUpload, tvGenresUpload, onMmovie} = this.props;        
        
        const moviesToMenu = movieGenres ? movieGenres.map(el => {
            return (
                <NavDropdown.Item key= {el.id} as="div" >
                <Link to={`/movie/${el.id}`}>{el.name}</Link>
                </NavDropdown.Item>
            )
        }) : <Spinner/>
        const tvToMenu = tvGenres ? tvGenres.map(el => {
            return (
                <NavDropdown.Item key={el.id} as="div">
                <Link to={`/tv/${el.id}`}>{el.name}</Link>                
                </NavDropdown.Item>
            )
        }) : <Spinner/>


        return     (     
        <Router>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Movie Site</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>                
                <NavDropdown title="Movie Genres" id="basic-nav-dropdown" onClick = {movieGenresUpload} >
                   {moviesToMenu}
                </NavDropdown>
                <NavDropdown title="TV Genres" id="basic-nav-dropdown" onClick = {tvGenresUpload}>
                   {tvToMenu}
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
            <Route exact path="/" component={Main}/>  
            <Route path="/movie/:id" component={props=><Movie movie = {onMmovie}{...props}/>  } />  
            <Route path="/tv/:id" component={props=><TV movie = {onMmovie}{...props}/>  } />  
            <Route path="/showmovie/:id" component={SingleMovie} /> 
        </Router>
        )
    }
}