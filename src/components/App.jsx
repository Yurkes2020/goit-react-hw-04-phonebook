import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm ';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, Conteiner } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const isExist = this.state.contacts.find(contact => contact.name);
    if (isExist) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: nanoid(7), name, number }],
    }));
  };

  handleChangeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  showContacts = () => {
    const { filter, contacts } = this.state;
    const normalFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );
  };

  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact),
    }));
  };

  render() {
    return (
      <Conteiner>
        <Title>Phonebook</Title>
        <ContactForm onFormSubmit={this.formSubmitHandler} />
        <Title>Contacts</Title>
        <Filter filter={this.state.filter} onChange={this.handleChangeFilter} />
        <ContactList
          contacts={this.showContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Conteiner>
    );
  }
}
