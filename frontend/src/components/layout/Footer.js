import React from "react";
import "../../styles/components/layouts/Footer.css";

const Footer = (props) => {
  return (
    <footer>

      <div className="redesFooter">

        <a href="https://www.linkedin.com/in/manuleivaok/" target="_blank" rel='noreferrer'><div className='linkedin iconosFooter' ></div></a>

        <a href="https://www.facebook.com/ManuLL0407/" target="_blank" rel='noreferrer'><div className='facebook iconosFooter'></div></a>

        <a href="https://www.instagram.com/manuleivaok/?hl=es" target="_blank" rel='noreferrer'><div className='instagram iconosFooter'></div></a>

        <a href="https://api.whatsapp.com/send?phone=543572691470&" target="_blank" rel='noreferrer'><div className='whatsapp iconosFooter'></div></a>

      </div>

      <div className='noDerechos'>
        <h4>Derechos reservados a Manuel Leiva, sin copyright</h4>
      </div>
    </footer>
  );
};

export default Footer;
