import { Component } from 'react';
import { connect } from 'react-redux';
import ContactItem from '../ContactItem';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import './ContactList.scss';
import { getFilteredSortedContacts } from '../../redux/contacts/contacts-selectors';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul className="Contact-list">
        {contacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <li key={id} className="Contact-item">
              <ContactItem
                id={id}
                name={name}
                number={number}
                onDeleteContact={onDeleteContact}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getFilteredSortedContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
