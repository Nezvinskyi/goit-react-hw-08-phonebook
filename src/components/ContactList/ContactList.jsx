import { Component } from 'react';
import { connect } from 'react-redux';
import DeleteBtn from '../DeleteBtn';
import { fetchContacts, deleteContact } from '../../redux/contacts/contacts-operations';
import './ContactList.scss';
import { contactsSelectors } from '../../redux/contacts';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, name, number }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>
                <a href={`tel: ${number}`}>{number}</a>
              </td>
              <td>{<DeleteBtn id={id} onDeleteContact={onDeleteContact} />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredSortedContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
