import React from 'react'
import { Contacto } from '../../models/contactos_class'
import PropTypes from 'prop-types'

function ContactoComponent({info, remove}) {
    return (
        <div>
            <tr className='fw-normal table'>
                <th>
                    <span className='align-middle'>{info.name}</span>
                </th>
                <td>
                    <span className='align-middle'>{info.lastName}</span>
                </td>
                <td>
                    <span className='align-middle'>{info.phoneNumber}</span>
                </td>
                <td>
                    <span className='align-middle'>{info.email}</span>
                </td>
                <td className='align-middle'> 
                    <i onClick={()=> remove(info)} className='bi-trash task-action' style={{ color: 'tomato' }}></i>
                </td>
            </tr>
        </div>
    )
}


ContactoComponent.propTypes = {
    info: PropTypes.instanceOf(Contacto).isRequired,
    remove: PropTypes.func.isRequired
};
export default ContactoComponent