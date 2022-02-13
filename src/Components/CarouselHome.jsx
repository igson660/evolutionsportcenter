import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';


export default function CarouselHome() {
  return (
    <Carousel className='caroussel-home'>
      <Carousel.Item interval={3000} key="1" >
        <img
          className="d-block w-100"
          src={image1}
          alt="Foto dos atletas"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000} key="2" >
        <img
          className="d-block w-100"
          src={image2}
          alt="Foto dos atletas"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} key="3" >
        <img
          className="d-block w-100"
          src={image3}
          alt="Foto dos atletas"
        />
      </Carousel.Item>
    </Carousel>
  );
}
