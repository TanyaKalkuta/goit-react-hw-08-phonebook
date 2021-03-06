import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import routes from './routes';
import './styles.css';
import AppBar from './Component/AppNavBar';
import Spinner from './Component/Loader';
import Container from './Component/Container';
import { authOperations } from './redux/auth';
import PrivateRoute from './Component/PrivateRoute';
import PublicRoute from './Component/PublicRoute';
// import ContactForm from './Component/ContactForm';
// import Filter from './Component/Filter';
// import ContactList from './Component/ContactList';
const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /*webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /*webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /*webpackChunkName: "contacts-view" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Container>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <PublicRoute exact path={routes.home} component={HomeView} />
              <PublicRoute
                path={routes.register}
                restricted
                redirectTo={routes.home}
                component={RegisterView}
              />
              <PublicRoute
                path={routes.login}
                restricted
                redirectTo={routes.home}
                component={LoginView}
              />
              <PrivateRoute
                path={routes.contacts}
                component={ContactsView}
                redirectTo={routes.login}
              />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
