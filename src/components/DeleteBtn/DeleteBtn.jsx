import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteBtn = ({ id, onDeleteContact }) => {
  return (
    <IconButton aria-label="delete" onClick={() => onDeleteContact(id)}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteBtn;
