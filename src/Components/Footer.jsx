import React from 'react';
import '../styles/footer.css';
import SocialMedia from './SocialMedias';
import watts_image from '../images/watts_image.png'

export default function Footer({ urlInstagran }) {
  function year() {
    const year = new Date().getFullYear();
    return year
  }

  return (
    <footer className="footer">
      <div className="div-footer">
        <h6>Contate-nos</h6>
        <div>
          <SocialMedia
            urlInstagran={urlInstagran}
            className="footer-itens"
          />
          <a
          href="https://api.whatsapp.com/send?phone=5568992024942"
          className="footer-itens"
          >
            <img
              alt="Instagran"
              src={watts_image}
              width="30px"
            />
          </a>
        </div>
      </div>
      <p>Copyright&copy; {year()} - Igson Félix | Bárbara Badu</p>
    </footer>
  );
}