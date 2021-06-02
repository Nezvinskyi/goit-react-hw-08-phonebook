import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div>
    <NavLink to="/register" exact className="nav-link" activeClassName="nav-link--active">
      Registration
    </NavLink>
    <NavLink to="/login" exact className="nav-link" activeClassName="nav-link--active">
      Login
    </NavLink>
  </div>
);

export default AuthNav;
