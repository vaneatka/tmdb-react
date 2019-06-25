import React, {Component} from 'react';
import DbApi from '../services/request'
import MultipleMain from './MultipleMain'

export default class TV extends Component{
  
        state = {
            movie:null,
            genre_id: null
        }      
      
      DbApi = new DbApi();

    componentDidMount(){
    const genre_id = this.props.match.params.id ? this.props.match.params.id :null;        
        this.setState({
          genre_id: genre_id
        });

    const res = this.DbApi.getTv(genre_id);
    res.then(data => this.setState({
      movie:data.results
    }))
    }  
       
    render(){  
      let {movie} = this.state;       
      return (
        <MultipleMain  data = {movie} />
      )
      
    }
}