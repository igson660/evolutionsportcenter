import React from 'react';
import '../styles/aboutMe.css';
import Footer from '../Components/Footer';
import CarouselTeachers from '../Components/CarouselTeachers';

export default function AboutMe() {
  return (
    <>
      <main>
        <section className="about-me-section-1">
          <h1>Evolution Sport Center</h1>
          <p className="ph-about-me"> A academia foi fundada em 2014 pelo professor <strong>Jose Roberto</strong> e amigos que  acreditaram no seu potencial para administrar e transforma-la em um ambiente agradável para treinar.
            Mas foi passando por vários processos de mudança como: local, estrutura, nome e logo que a deixou de cara nova.
            O Centro de Treinamento tem inúmeros alunos que buscavam as aulas de lutas sem o objetivo competitivo, apenas para controle e tratamento de diversas patologias.</p>
        </section>
        <section className="about-me-section-2">
          <h2>Holl de Professores</h2>
          <CarouselTeachers />
        </section>
      </main>
      <Footer
        urlInstagran="https://www.instagram.com/evolutionsportcenter/"
      />
    </>
  );
}
