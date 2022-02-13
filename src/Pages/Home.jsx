import React from 'react';
import '../styles/home.css';
import CarouselHome from '../Components/CarouselHome';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <CarouselHome />
        <div className="div-home">
          <h3 className="title-home">Venha conhecer nosso Espaço</h3>
          <p className="ph-home">
            Para quem nunca teve contato com Arte Marcial, oferecemos uma aula particular gratuita com um de nosssos professores. Em um ambiente confortável, com infra estrutura completa e uma equipe de alto nível, você terá uma experiência incomparável!
          </p>
        </div>
      </main>
      <Footer
        urlInstagran="https://www.instagram.com/evolutionsportcenter/"
      />
    </>
  );
}
