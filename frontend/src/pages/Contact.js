import React from "react";
import "../styles/components/pages/Contact.css";
import { buttons } from "../components/layout/Header";
import { useState } from "react";
import axios from 'axios';

const Contact = (props) => {
  const initialForm = {
    nombre: '',
    mail: '',
    telefono: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handeChange = e => {
    const {name, value} = e.target;
    setFormData(oldData => ({
      ...oldData, 
      [name]: value 
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }


  return (
    <main className="holder">
      <div className="logoNavContact">
        {buttons()}
      </div>

      <h2>Formulario de contacto</h2>
      <div className="containerContact">
        <div className='formulario'>
          <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
            <p>
              <label>Nombre</label>
              <input type="text" name="nombre" value={formData.nombre} onChange={handeChange}></input>
            </p>
            <p>
              <label>Email</label>
              <input type="text" name="mail" value={formData.mail} onChange={handeChange}></input>
            </p>
            <p>
              <label>Teléfono</label>
              <input type="number" name="telefono" value={formData.telefono} onChange={handeChange}></input>
            </p>
            <p>
              <label>Comentario</label>
              <textarea name="mensaje" value={formData.mensaje} onChange={handeChange}></textarea>
            </p>
            <p className="centrar">
              <input type="submit" value="Enviar" className='botonContact'></input>
            </p>
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> :null}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
