import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import * as modalActions from '../../redux/modal/modal-actions';
import * as modalSelectors from '../../redux/modal/modal-selectors';

const ModalWindow = ({ title, isOpen, toggleModal, children }) => {
  return (
    <Modal show={isOpen} onHide={toggleModal} animation={false}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {/* <Modal.Footer>This is the footer</Modal.Footer> */}
    </Modal>
  );
};
const mapStateToProps = state => ({
  isOpen: modalSelectors.getIsOpen(state),
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(modalActions.toggleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
