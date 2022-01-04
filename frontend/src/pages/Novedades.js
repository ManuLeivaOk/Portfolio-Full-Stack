import React from "react";
import { buttons } from "../components/layout/Header";
import '../styles/components/pages/Novedades.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import NovedadItem from "../components/layout/novedades/NovedadItem";



const Novedades = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);
    
    useEffect(() => {
      const cargarNovedades = async () => {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
        console.log(response.data)
        setNovedades(response.data);
        setLoading(false)
      };
      cargarNovedades();
    }, []);
    console.log(novedades)

    return(
    <section className="contenedorNovedades">
        <div className="logoNavNovedades">
          {buttons()}
        </div>

        <div className="tituloNoticias">
          <h2 className="tituloPage">Novedades, desde la DB y el back</h2>
          {loading ? (
            <p>Cargando...</p>
          ) : (
            novedades.map(item => <NovedadItem key={item.id} title={item.titulo} subtitle={item.subtitulo} body={item.cuerpo}/>) 
          )}
        </div>
    </section>
)};

export default Novedades;
