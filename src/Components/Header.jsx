import React, { useState } from 'react';
import logo from '../images/logo.jpg'
import Ul from '../styles/header/navRightStyle';
import BurguerStyle from '../styles/header/burguerStyle'
import Head from '../styles/header/headerStyle'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <Head >
        <nav>
          <a href="/" className="logo">
            <img className="logoImage" alt="Logo do centro de treinamento de artes marciais" src={logo}/>
          </a>
          <BurguerStyle open={open} onClick={ () => setOpen(!open)}>
            <div className="mobile-menu">
              <div className="line1"/>
              <div className="line2"/>
              <div className="line3"/>
            </div>
          </BurguerStyle>
          <Ul open={open}>
            <li><a href="/" onClick={ () => setOpen(!open)}>Home</a></li>
              <li><a href="/quem-somos" onClick={ () => setOpen(!open)}>Quem somos</a></li>
              <li><a href="/programas" onClick={ () => setOpen(!open)}>Programas</a></li>
              <li><a href="/horarios" onClick={ () => setOpen(!open)}>Horários</a></li>
              <li><a href="/planos" onClick={ () => setOpen(!open)}>Planos</a></li>
          </Ul>
        </nav>
    </Head>
  );
}
