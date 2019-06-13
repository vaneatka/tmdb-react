import React, {Component} from 'react';


export default class Header extends Component{
    constructor(props){
        super(props);
        this.state= {
            movies: this.props.movie
        }
        console.log(props, 'props');
        
    }
          
    
   
        
    
    render(){     
        
        return(
            <div>
                <h3>{}</h3>
            </div>
        )
    }
}