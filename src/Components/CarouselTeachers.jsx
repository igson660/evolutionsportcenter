import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import teachers from '../data/dataTeacher';
import { Link } from 'react-router-dom';
import joseRoberto from '../images/joseRoberto.jpeg'
import suelemGomes from '../images/suelemGomes.jpeg'
import ThomasBrian from '../images/ThomasBrian.jpeg'

export default function CarouselTeachers() {
  return (
    <Carousel>
      <Carousel.Item interval={2000} key={teachers[0].id} >
        <Link to={`/quem-somos/${teachers[0].id}`} >
          <img
            className="d-block w-100"
            src={joseRoberto}
            alt={`Foto do professor(a) ${ teachers[0].name }`}
          />
        </Link>
        <Carousel.Caption>
          <h3>Clique para saber mais</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} key={teachers[1].id} >
        <Link to={`/quem-somos/${teachers[1].id}`} >
          <img
            className="d-block w-100"
            src={suelemGomes}
            alt={`Foto do professor(a) ${ teachers[1].name }`}
          />
        </Link>
        <Carousel.Caption>
          <h3>Clique para saber mais</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item key={teachers[2].id} interval={2000} >
        <Link to={`/quem-somos/${teachers[2].id}`} >
          <img
            className="d-block w-100"
            src={ThomasBrian}
            alt={`Foto do professor(a) ${ teachers[2].name }`}
          />
        </Link>
        <Carousel.Caption>
          <h3>Clique para saber mais</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
