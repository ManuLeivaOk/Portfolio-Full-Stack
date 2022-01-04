import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/layouts/Header.css";

export const logo = () => {
  return (
    <div className="logo">
      <img
        src="/images/logoManu.png"
        alt="Logo Manu Leiva"
        className="logoManu"
      />
    </div>
  );
};

export const buttons = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg" style={{background: '#2E4C6D'}}>
      <div className="container-fluid containerNav">
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-6" >
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{fontSize: '2em', color:"#EFEFEF", margin: "0px 10px"}}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About" style={{fontSize: '2em', color:"#EFEFEF", margin: "0px 10px"}}>
                Sobre mí
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact" style={{fontSize: '2em', color:"#EFEFEF", margin: "0px 10px"}}>
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Novedades" style={{fontSize: '2em', color:"#EFEFEF", margin: "0px 10px"}}>Novedades</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Header = (props) => {
  return (
    <header>
      {buttons()}
        <div className="saludoYFoto">
          <div className="saludoHeader">
            <h2 className="subtituloHeader">
              Hola, soy <span>Manuel Leiva</span>
            </h2>
            <h1 className="tituloHeader">Full Stack Developer</h1>
            <button type="submit">
              <a 
                className="enlaceBoton"
                href="https://www.linkedin.com/in/manuleivaok/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </button>
          </div>
          <div className="fotoHeader"></div>
        </div>
    </header>
  );
};

export default Header;
