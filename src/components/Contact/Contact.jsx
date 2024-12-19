import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contactsOps'; // Оновлено імпорт

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className="contact">
      <span className="contact-info">
        <span className="contact-name">{contact.name}</span>
        <span className="contact-number">{contact.number}</span>
      </span>
      <button onClick={() => dispatch(deleteContact(contact.id))} className="delete-button">
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
