// Ejemplo hooks useState() y useContext()
// la idea es pasar información entre componentes a través del contexto y no por props. 
// Es el padre el provider de los datos y quien los cambia para actualizar los componentes de orden inferior. 

import React, { useState, useContext } from 'react';

const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            <Componente2 />
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    )
}

function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    const [sessionData, setSessionData] = useState(estadoInicial)

    function actualizarSesion() {
        setSessionData(
            {
                token: Math.random().toString(36).substr(2),
                sesion: sessionData.sesion + 1
            }
        )

    }

    return (
        <miContexto.Provider value={sessionData}>
            <h1>Ejemplo de useState() y useContext()</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar</button>
        </miContexto.Provider>)
}

export default MiComponenteConContexto
