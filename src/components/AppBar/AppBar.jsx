import { NavLink } from 'react-router-dom';

import AuthNav from '../AuthNav';
import './AppBar.scss';
import UserMenu from '../UserMenu';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { useRef } from 'react';
import Filter from '../Filter';

const AppBar = ({ isAuthenticated }) => {
  const mobileMenu = useRef();
  const handleMenu = () => {
    mobileMenu.current.classList.toggle('collapse');
  };
  return (
    <header>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light container-fluid">
        <div className="nav-item">
          <NavLink to="/" exact className="nav-link" activeClassName="active">
            Main
          </NavLink>
        </div>

        <button
          onClick={handleMenu}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div ref={mobileMenu} className="collapse navbar-collapse" id="navbarSupportedContent">
          {isAuthenticated && <Filter />}
          <div style={{ marginLeft: 'auto' }}>{isAuthenticated ? <UserMenu /> : <AuthNav />}</div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(AppBar);
