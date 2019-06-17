import React, {Component} from 'react';


export default class Header extends Component{
    constructor(props){
        super(props);
        this.state= {
            movies: null
        }  
    }
    
    componentDidMount(){
              console.log(this.props, 'props');
              
          }
    
   
        
    
    render(){     
      const  {movies} = this.state;
      console.log(movies);
      
      const toRender = movies ? movies.map(el => { return (
            <h3>el.title</h3>
        )
    }) : "loading";
        
        return(
            <div>
                <h3>{toRender}</h3>
            </div>
        )
    }
}