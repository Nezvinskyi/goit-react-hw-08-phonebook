import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => (
  <div>
    <NavLink to="/" exact className="nav-link" activeClassName="nav-link--active">
      Main
    </NavLink>
    {isAuthenticated && (
      <NavLink to="/contacts" exact className="nav-link" activeClassName="nav-link--active">
        Contacts
      </NavLink>
    )}
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(Navigation);
