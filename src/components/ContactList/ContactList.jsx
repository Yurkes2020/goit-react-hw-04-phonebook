import PropTypes from 'prop-types';
import { List, Delete } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}:{number}
          <Delete type="button" id={id} onClick={() => onDeleteContact(id)}>
            Delete
          </Delete>
        </li>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
