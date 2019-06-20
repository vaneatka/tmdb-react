import React, {Component} from 'react';
import Slider from './Slider';
import Navigation from './Navigation'
export default class Header extends Component{

    
    render(){            
        const {onMovie, movieGenres, tvGenres} = this.props;       
            
                return(
                <>                  
                  <Slider onMovie = {onMovie}/>
                  <Navigation movieGenres = {movieGenres} tvGenres = {tvGenres}/>                 
                 </>
        )   
    }
}