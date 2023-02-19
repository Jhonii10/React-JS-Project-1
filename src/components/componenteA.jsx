import React from 'react';
//import PropTypes from 'prop-types';
import { Datos } from '../models/datos';
import ComponenteB from './componenteB';


const ComponenteA = () => {

    const contacto = new Datos(
        "Jhonier",
        "Ipia",
        "jhonieripianoscue@gmail.com",
        true
    )

    return (
        <div>
        <h1>Contacto</h1>
        <ComponenteB datos={contacto}></ComponenteB>
        </div>
    );
};  


export default ComponenteA;
