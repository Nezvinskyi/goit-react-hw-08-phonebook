import { NavLink } from 'react-router-dom';
const Navigation = () => (
  <div>
    <NavLink to="/" exact className="nav-link" activeClassName="nav-link--active">
      Main
    </NavLink>
    <NavLink to="/contacts" exact className="nav-link" activeClassName="nav-link--active">
      Contacts
    </NavLink>
  </div>
);

export default Navigation;
