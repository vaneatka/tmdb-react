import React, {Component} from 'react';
import DbApi from '../services/request'

export default class SingleMovie extends Component{
  
        state = {
            id: null,
            movie: null
        }      
      
      DbApi = new DbApi();
        
      componentDidMount(){
            const id = this.props.match.params.id ? this.props.match.params.id :null;        
            this.setState({
                id: id
            });
    
        const res = this.DbApi.getSpecificMovie(id);
        res.then(data => this.setState({
          movie:data
        }))
        
        }
       
    render(){  
      const {movie} = this.state;
      
      return (
        <div>wtf</div>
      )
      
    }
}