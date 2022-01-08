import React, { Component } from 'react';
import shortid from 'shortid';
import toast, { Toaster } from 'react-hot-toast';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import Form from './components/Form/Form';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <Toaster />
        <Section title="Phonebook">
          <Form onSubmit={this.addContact}></Form>
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          ></ContactsList>
        </Section>
      </Container>
    );
  }
}

export default App;
