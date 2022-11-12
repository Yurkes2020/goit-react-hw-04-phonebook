import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Form, FormLabel } from './ContactForm.styled';

export const ContactForm = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = { name, number };
    onFormSubmit(data);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form>
      <FormLabel onSubmit={handleSubmit}>
        Name
        <input
          onChange={handleChange}
          value={name}
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>

      <FormLabel>
        Number
        <input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>

      <button type="submit">Add contact</button>
    </Form>
  );
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
