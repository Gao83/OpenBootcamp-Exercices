import React, { useState } from 'react';

const EjemploUseState = () => {

    const valorInicial = 0
    const personaInicial = {
        nombre: 'Isaac',
        email: 'isaac@gmail.com'
    }

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)

    const incrementarContador = () => {
        setContador(contador + 1)

    }

    const actualizarPersona = () => {
        setPersona({
            nombre: 'Pepe',
            email: 'pepe@msn.es'
        })
    }

    return (
        <div>
            <h1>Ejemplo de Use State</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos personales:</h2>
            <h3>{persona.nombre}</h3>
            <h3>{persona.email}</h3>

            <div>
                <button onClick={incrementarContador}>Incrementar Contador</button>
                <button onClick={actualizarPersona}>Nueva persona</button>
            </div>


        </div>
    );
}

export default EjemploUseState;
