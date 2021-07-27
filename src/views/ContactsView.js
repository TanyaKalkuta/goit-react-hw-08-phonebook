import React from 'react';
import Container from '../Component/Container';
import ContactForm from '../Component/ContactForm';
import Filter from '../Component/Filter';
import ContactList from '../Component/ContactList';

// import { fetchContacts } from './redux/phonebook/phonebook-operations';

class ContactsView extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />

          <ContactList />
        </div>
      </Container>
    );
  }
}

export default ContactsView;
