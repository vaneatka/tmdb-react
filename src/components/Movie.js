import React, {Component} from 'react';
import DbApi from '../services/request'

export default class Movie extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            genre_id: null
        }
      }

    componentDidMount(){
    const genre_id = this.props.match.params.id ? this.props.match.params.id :null;        
        this.setState({
            movies :null,
            genre_id: genre_id
        })
        console.log(this)
    }

    DbApi = new DbApi();

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
          const genre_id = nextProps.match.params.id
          this.setState({
              genre_id: genre_id 
            })
        }
        console.log(nextProps)
      }
       
    render(){            
        console.log(this.props)
                return(
                <>                  
                  This Movie is Awesome  
                 </>
        )   
    }
}