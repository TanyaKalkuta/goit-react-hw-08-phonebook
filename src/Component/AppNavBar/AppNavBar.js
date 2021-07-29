import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';
import s from './AppNavBar.module.css';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={s.Header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
