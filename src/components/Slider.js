import React, {Component} from 'react';
import {Card , Spinner} from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default class Slider extends Component{

    render(){            
        const {onMovie} = this.props;         
        
          const content = onMovie ? onMovie.map( el => { return(
                                     <Card className="bg-dark text-white" key = {el.id}>
                                        <Card.Img src={`https://image.tmdb.org/t/p/w185${el.poster_path}`} alt={el.title} />                                                                                                              
                                        
                                    </Card>)}) : <Spinner/>;            
     
                return(
                  <Carousel
                  additionalTransfrom={0}
                  arrows
                  autoPlay
                  autoPlaySpeed={2500}
                  centerMode={false}
                  containerClass="container-with-dots"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  responsive={{
                    desktop: {
                      breakpoint: {
                        max: 3000,
                        min: 1024
                      },
                      items: 6,
                      paritialVisibilityGutter: 40
                    },
                    mobile: {
                      breakpoint: {
                        max: 464,
                        min: 0
                      },
                      items: 1,
                      paritialVisibilityGutter: 30
                    },
                    tablet: {
                      breakpoint: {
                        max: 1024,
                        min: 464
                      },
                      items: 2,
                      paritialVisibilityGutter: 30
                    }
                  }}
                  showDots={false}
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                >
                        {content}
                    </Carousel>
                 
        )   
    }
}