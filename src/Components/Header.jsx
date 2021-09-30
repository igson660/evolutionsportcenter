import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';
import logo from '../images/logo.jpg'

export default function Header() {
  return (
    <header className="header">
      <div className="div-header">
        <div>
          <a href="/">
            <img
              alt="Logo do centro de treinamento de artes marciais"
              src={logo}
              className="logoImage"
            />
          </a>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Home</Dropdown.Item>
              <Dropdown.Item href="/quem-somos">Quem Somos</Dropdown.Item>
              <Dropdown.Item href="/programas">Programas</Dropdown.Item>
              <Dropdown.Item href="/horarios">Horários</Dropdown.Item>
              <Dropdown.Item href="/planos">Planos</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
