import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import './Navigation.css';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <ul className="Navbar">
        <li>
          <NavLink
            exact
            to={routes.home}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li>
            <NavLink
              to={routes.contacts}
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
