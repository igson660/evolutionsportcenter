import React from 'react';
import { Link } from 'react-router-dom';

export default function ProgramsCard({ program }) {
  return (
    <>
      <div className="main-programs">
        <h3>{program.name}</h3>
        <Link to={`/programas/${program.id}`} >
          <button
            type="button"
            className="back-button"
          >
            Mais Detalhes
          </button>
        </Link>
      </div>
    </>
  );
}