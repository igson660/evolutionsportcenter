import React from 'react';
import '../styles/programsDatail.css';
import { Link, useHistory } from 'react-router-dom';
import programs from '../data/dataPrograms'
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function TeacherDetail() {
  const { location: { pathname } } = useHistory();
  const id = pathname.split('/')[2];

  const program = programs.find((program) => program.id === id);

  return (
    <>
      <Header />
      <main className="main-datail">
        <h3 id="title-program">{program.name}</h3>
        <p id="text-program">{program.description}</p>
        <Link to="/programas">
          <button
            type="button"
            className="back-button"
          >
            Voltar
          </button>
        </Link>
      </main>
      <Footer
        urlInstagran="https://www.instagram.com/evolutionsportcenter/"
      />
    </>
  );
}