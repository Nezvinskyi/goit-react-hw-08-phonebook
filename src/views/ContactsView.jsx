import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import AddBtn from '../components/AddBtn';
import ModalWindow from '../components/ModalWindow';
// import Filter from '../components/Filter';

const ContactsView = () => {
  return (
    <>
      <ContactList />

      <AddBtn />
      <ModalWindow title="Add new contact">
        <ContactForm />
      </ModalWindow>
    </>
  );
};

export default ContactsView;
