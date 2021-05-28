// TODO delete Layout
import React from 'react';
import { connect } from 'react-redux';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import MyLoader from './components/Loader/Loader';
import { getIsLoading } from './redux/contacts/contacts-selectors';
import Container from './components/Container';
import AppBar from './components/AppBar';

const App = ({ isLoading }) => (
  <Container>
    <AppBar />
    <Section title="Phonebook">
      <ContactForm />
    </Section>

    <Section title="Contacts">
      <Filter />
      <ContactList />
    </Section>
    {isLoading && <MyLoader />}
  </Container>
);

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

export default connect(mapStateToProps)(App);
