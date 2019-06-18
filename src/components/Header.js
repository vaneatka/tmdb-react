import React, {Component} from 'react';
import {Card , Spinner} from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default class Header extends Component{

    
    render(){            
        const {onMovie} = this.props;
        console.log(onMovie);

        const responsive={
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
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
          }
        
          const content = onMovie ? onMovie.map( el => { return(
                                     <Card className="bg-dark text-white" key = {el.id}>
                                        <Card.Img src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} alt="Card image" />
                                        
                                            <Card.Title>{el.title}</Card.Title>                                                                                    
                                        
                                    </Card>)}): <Spinner/>;
            
     
                return(
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        slidesToSlide={1}
                        infinite={true}
                        autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        
                        transitionDuration={2000}                        
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        centerMode={true}
                        additionalTransfrom={0}
                        containerClass="container-with-dots"
                        customTransition="transform 300ms ease-in-out"  
                        draggable
                        focusOnSelect={false} 
                        minimumTouchDrag={80}
                        >
                        {content}
                    </Carousel>
                 
        )   
    }
}