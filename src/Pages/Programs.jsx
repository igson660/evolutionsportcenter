import React from 'react';
import '../styles/programs.css';
import { Carousel } from 'react-bootstrap';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ProgramsCard from '../Components/ProgramsCard';
import programs from '../data/dataPrograms';

export default function Programs() {
  return (
    <>
      <Header />
      <main >
        <Carousel>
          {
            programs.map((program, index) => (
              <Carousel.Item interval={4000} key={index} >
                <ProgramsCard program={program} />
              </Carousel.Item>))
          }
        </Carousel>
      </main>
      <Footer
        urlInstagran="https://www.instagram.com/evolutionsportcenter/"
      />
    </>
  );
}