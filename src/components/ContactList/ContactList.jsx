
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id} className="contact">
          <span className="contact-info">
            <span className="contact-name">{contact.name}</span>
            <span className="contact-number">{contact.number}</span>
          </span>
          <button onClick={() => deleteContact(contact.id)} className="delete-button">
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
