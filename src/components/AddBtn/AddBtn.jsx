import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import * as actions from '../../redux/modal/modal-actions';

const useStyles = makeStyles(() => ({
  fab: {
    position: 'fixed',
    bottom: '2em',
    right: '2em',
  },
}));

const AddBtn = ({ handleAdd }) => {
  const classes = useStyles();
  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={handleAdd}
      >
        <AddIcon />
      </Fab>
    </>
  );
};
const mapDispatchToProps = dispatch => ({
  handleAdd: () => dispatch(actions.toggleModal()),
});

export default connect(null, mapDispatchToProps)(AddBtn);
