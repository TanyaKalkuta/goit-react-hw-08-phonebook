import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
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
        <li>
          <NavLink
            to={routes.contacts}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Contacts
          </NavLink>
        </li>
        {/* {isAuthenticated && (
        <li className={s.ItemNav}>
          <NavLink
            to="/contacts"
            exact
            className={s.link}
            activeClassName={s.activeLink}
          >
            Contacts
          </NavLink>
        </li>)} */}
      </ul>
    </nav>
  );
};

export default Navigation;
