import React, {Component} from 'react';
import DbApi from '../services/request'

export default class Movie extends Component{
    
    movies = null;
    DbApi = new DbApi();

    componentDidMount(){
        this.DbApi.getMovie(this.props.match.params.id).then(data => this.movie = data);
    }
    
    render(){            
        const {id} = this.props.match.params;       
        console.log(this.movie);
                return(
                <>                  
                  This Movie is Awesome    
                 </>
        )   
    }
}