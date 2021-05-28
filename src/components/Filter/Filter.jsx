import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import './Filter.scss';

const Filter = ({ filter, onChange }) => (
  <FormControl variant="outlined" className="Filter-input">
    <InputLabel color="secondary" htmlFor="component-outlined-filter">
      Find contacts by name
    </InputLabel>
    <OutlinedInput
      type="text"
      id="component-outlined-filter"
      color="secondary"
      value={filter}
      onChange={onChange}
      label="Find contacts by name"
    />
  </FormControl>
);

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
