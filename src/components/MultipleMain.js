import React, {Component} from 'react';

export default class  MultipleMain extends Component{


    render(){        
        const {data} = this.props; 
      
      const row = data ? data.map(el => {
        return (
          <div className="row" key = {el.id}>
            <h3>{el.title}</h3><p>{el.release_date}</p>
            
                <div className = "col-lg-5">
                  <img src={`https://image.tmdb.org/t/p/w185${el.poster_path}`} alt={el.title}  />
                </div>
                <div className = "col-lg-7">
                  <p >{el.overview}</p>
                </div>
            

          </div>
        )
      }) : "yo";


                return(
                <div className='container-fluid'>                  
                  {row}
                 </div>
        )   

        
    }

}