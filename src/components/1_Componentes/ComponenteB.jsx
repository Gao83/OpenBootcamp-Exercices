import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Componente } from '../../models/Componente_class'

const ComponenteB = ({ info }) => {
    
    const [isConected, setIsConected] = useState(info.conected)

    const changeConection = () => {
        if (isConected) {
            setIsConected(false)
        } else {
            setIsConected(true)
        }
    }

  return (

      <div>
          <h2>
              Name: {info.name}
          </h2>
          <h3>
              Last Name: {info.lastName}
          </h3>
          <h4>
              Email: {info.email}
          </h4>
          <h5>
              Status: {isConected ? 'ONLINE' : 'OFFLINE'}
          </h5>
          <button onClick={changeConection}>CHANGE STATUS</button>
      </div>
  )
}

ComponenteB.propTypes = {
info: PropTypes.instanceOf(Componente)
}

export default ComponenteB