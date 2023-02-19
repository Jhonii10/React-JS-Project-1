import React from 'react';
import PropTypes from 'prop-types';
import { Datos } from '../models/datos';


const ComponenteB = ({datos}) => {
    return (
        <div>
        <h2>
            Nombre: {datos.nombre}
        </h2>
        <h3>
            Apellido: {datos.apellido}
        </h3>
        <h4>
            Email: {datos.email}
        </h4>
        <h5>
            El contacto esta: {datos.conectado ?'en linea':'no esta disponible'}
        </h5>
        

            
        </div>
    );
};


ComponenteB.propTypes = {
    datos: PropTypes.instanceOf(Datos)

};


export default ComponenteB;
