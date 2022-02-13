import React from 'react';
import '../styles/programs.css';
import { Carousel } from 'react-bootstrap';
import Footer from '../Components/Footer';
import plans from '../data/dataPlans';
import PlansCard from '../Components/PlansCard';

export default function Plans() {
  return (
    <>
      <main>
        <Carousel>
          {
            plans.map((plan, index) => (
              <Carousel.Item interval={4000} key={index} >
                <PlansCard plan={plan} />
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