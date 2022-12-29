import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import { Contact } from '../../models/contact';


const ContactComponent = ({ contact }) => {


    const [online, setOnline] = useState(true);
    
    const stateOnline = () => {
        setOnline(!online);
        contact.online = online;
    }
    return (
            <div>
                <h2>
                    Nombre: { contact.name }
                </h2>
                <h2>
                    Apellido: { contact.last_name }
                </h2>
                <h3>
                    Email: { contact.email }
                </h3>
                <h4>
                    Estado: { online ? "Desconectado":"En Línea" }
                </h4>
                <div>
                    <button onClick={stateOnline}>
                        Cambiar Estado
                    </button>
                </div>
            </div>
    );
}



ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
