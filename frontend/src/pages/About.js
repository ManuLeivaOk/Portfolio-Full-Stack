import React from "react";
import "../styles/components/pages/About.css";
import { buttons } from "../components/layout/Header";

const About = (props) => {
  return (
    <section className="holder">
      <div className="navAbout">
        {buttons()}
      </div>

      <div className='containerAbout'>  
      <div className="about__text">
        <h2 className="subtitle">Sobre mí</h2>
        <p className="about__parrafo">
        Soy Manuel Leiva, psicólogo cordobés de 31 años. Amante de la música y el cine. Soy curioso e interesado en aprender constantemente de ámbitos variados. 
        </p>
        <p className="about__parrafo">
        Siempre fuí un apasionado por la tecnología y las posibilidades que nos brinda, por lo que decidí formarme en Desarrollo Web. Deseo insertarme en dicho mundo laboral para aplicar mis conocimientos y ampliarlos. Estoy completamente decidido a migrar al segmento IT ya que encontré una práctica en la que me siento "como pez en el agua" y me gratifica realizarla. 
        </p>
      </div>

      <div className="fotoAbout1"></div>
      <div className="fotoAbout2"></div>

      <div className="about__text">
        <h2 className="subtitle">Sobre mi trabajo</h2>
        <p className="about__parrafo">
          Me desempeño con responsabilidad, eficacia y dedicación en lo que hago. Me gusta trabajar bajo presión y puedo realizarlo de manera competente, cumpliendo con los objetivos que se planteen. Tengo gran interés por los desafíos y por encontrar las mejores formas de abordarlos.
        </p>
          
        <p className="about__parrafo">
         Por otro lado, disfruto mucho del trabajo en equipo, lo que potencia mi capacidad para llevarlo adelante. En estos meses que llevo realizando algunos proyectos, aprendí que también en este segmento, el trabajo con pares y colegas potencia las individualidades y ayuda mucho a que fluya el conocimiento, impulsa a crecer.  
        </p>
      </div>
      </div>
    </section>
  );
};

export default About;
