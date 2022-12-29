import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contact('John', 'Doe', 'johndoe@mail.com', true);

    const changeState = (id) => {
        console.log("TODO: Cambiar el estado de un contactio!");
    }
    
    return (
        <div>
            <div>
                Contactos:
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
}

export default ContactListComponent;
