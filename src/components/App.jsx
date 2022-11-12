import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm ';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, Conteiner } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    // const isExist = contacts.find(contact => contact.name === name);
    // if (isExist) {
    //   return alert(`${name} is already in contacts.`);
    // }
    setContacts(prevState => [...prevState, contact]);
  };

  const handleChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const showContacts = () => {
    const normalFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );
  };

  const deleteContact = idContact => {
    setContacts(contacts.filter(contact => contact.id !== idContact));
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsContacts = JSON.parse(contacts);
  //   if (parsContacts) {
  //     this.setState({ contacts: parsContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  return (
    <Conteiner>
      <Title>Phonebook</Title>
      <ContactForm onFormSubmit={formSubmitHandler} />
      <Title>Contacts</Title>
      <Filter filter={filter} onChange={handleChangeFilter} />
      <ContactList contacts={showContacts()} onDeleteContact={deleteContact} />
    </Conteiner>
  );
};
