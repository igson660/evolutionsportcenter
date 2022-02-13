import React from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../Components/Footer';
import horario_jiu from '../images/horario_jiu.jpeg';
import horario_muay from '../images/horario_muay.jpeg';
import '../styles/shedules.css';

export default function Shedules() {
  return (
    <>
      <main>
        <Carousel>
          <Carousel.Item interval={4000} >
            <img
              alt="Quadro de Harários do jiu-jitsu"
              src={horario_jiu}
              className="horarioImage"
            />
          </Carousel.Item>
          <Carousel.Item interval={4000} >
            <img
              alt="Quadro de Harários do muay-Tay"
              src={horario_muay}
              className="horarioImage"
            />
          </Carousel.Item>
        </Carousel>
      </main>
      <Footer
        urlInstagran="https://www.instagram.com/evolutionsportcenter/"
      />
    </>
  );
}
