import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap'

export default class Header extends Component{
     
    
    render(){            
        const {onMovie} = this.props;
        console.log(onMovie);
        
        return(
            <ListGroup as="ul">
                {onMovie ? onMovie.map(el=> 
                   <ListGroup.Item key = {el.id} as="li"> {el.title}</ListGroup.Item>):"Loading..."}
            </ListGroup>
        )
    }
}