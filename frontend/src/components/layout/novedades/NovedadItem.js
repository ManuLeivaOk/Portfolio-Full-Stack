import React from "react";

const NovedadItem = (props) => {
    const { title, subtitle, body } = props;

    return (
        <div className="novedades">
            <h1 className="tituloBD">{title}</h1>
            <h2 className="subtituloBD">{subtitle}</h2>
            <div className="cuerpoBD" dangerouslySetInnerHTML={{ __html: body}} />
            <hr/>
        </div>
    )
}

export default NovedadItem;