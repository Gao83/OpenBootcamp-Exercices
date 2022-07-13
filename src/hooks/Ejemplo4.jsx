// Entender el uso de props.children para pasar elementos de html 
// props.children pintará aquello que se encuentre entre las etiquetas de apretura y cierre desde el componete de orden superior

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de Props.Children </h1>
            <h2>Nombre: {props.nombre}</h2>
            {props.children}
        </div>
    );
}

export default Ejemplo4;
