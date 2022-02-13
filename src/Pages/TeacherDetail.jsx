import React from 'react';
import '../styles/teacherDatail.css';
import { Link, useHistory } from 'react-router-dom';
import teachers from '../data/dataTeacher'
import Footer from '../Components/Footer';
import SocialMedia from '../Components/SocialMedias';

export default function TeacherDetail() {
  const { location: { pathname } } = useHistory();
  const id = parseInt(pathname.split('/')[2]);

  const teacher = teachers.find((teacher) => teacher.id === id);

  function verifiedSocialMidea(midea) {
    if (midea !== null) {
      return true;
    } else {
      return false
    }
  }

  return (
    <>
      <main className="main-datail">
        <h3 className="main-datail-h3">{teacher.name}</h3>
        <p>{teacher.history}</p>
        <div className="social-midea">
          <SocialMedia
            thisMidea={verifiedSocialMidea(teacher.facebook)}
            urlFaceBook={teacher.facebook}
            urlInstagran={teacher.instagran}
          />
          <Link to="/quem-somos">
            <button
              type="button"
              className="back-button"
            >
              Voltar
            </button>
          </Link>
        </div>
      </main>
      <Footer
        urlInstagran="https://www.instagram.com/evolutionsportcenter/"
      />
    </>
  );
}
