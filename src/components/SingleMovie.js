import React, {Component} from 'react';
import DbApi from '../services/request'


export default class SingleMovie extends Component{
  
        state = {
            id: null,
            movie: null
        }            
      DbApi = new DbApi();
        
      componentWillReceiveProps(nextProps){
        console.log(nextProps);
        
        const id = nextProps.params.id || null;
        if(nextProps.params.id !== this.state.id){
          //Perform some operation
          const res = this.DbApi.getSpecificMovie(id);
          res.then(data => this.setState({
            id:id,
            movie:data
          }))        
        
        }
      }

    render(){  
      const {movie} = this.state;  
     
      const contents = movie ? (
                                <h2>{movie.title}</h2>
                               )  : 'loading';      
      return (
        <div>
          {contents}
        </div>
      )
      
    }
}