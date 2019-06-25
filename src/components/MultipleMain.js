import React, {Component} from 'react';

export default class  MultipleMain extends Component{


    render(){        
        const {data} = this.props; 
      
      const row = data ? data.map(el => {
        return (
          <div className='container border-bottom pb-2' key = {el.id}>                  
                  <div className="title p-3"><h3>{el.title || el.name}</h3></div>
                  <div className="d-flex p-2">
                  <img src={`https://image.tmdb.org/t/p/w185${el.poster_path}`} alt={el.title} className="p-2 m-2" />
                    <div className="mt-4 blockquote"><p  >{el.overview}</p></div>
                    
                  </div>
                  <span className='mt-4 ml-3'>
                      <a href="#" className="text-decoration-none">See more... >></a>
                    </span>                  
                 </div>
                  )
      }) : "";


                return(
                  <>
               {row}
               </>
        )   

        
    }

}