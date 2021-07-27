import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import './styles.css';
import AppBar from './Component/AppNavBar';
import Spinner from './Component/Loader';
import Container from './Component/Container';
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

const App = () => (
  <Container>
    <AppBar />

    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route path={routes.register} component={RegisterView} />
        <Route path={routes.login} component={LoginView} />
        <Route
          path={routes.contacts}
          component={ContactsView}
          redirectTo={routes.login}
        />
      </Switch>
    </Suspense>
  </Container>
);

export default App;
