import React from 'react'
import ComponenteB from './ComponenteB'
import { Componente } from '../../models/Componente_class'

function ComponenteA() {

    const defaultComponent = new Componente('Isaac', 'Miralles', 'isaac@gmail.com', false)

    return (
        <div>
            <ComponenteB info={defaultComponent}/>
        </div>
    )
}


export default ComponenteA