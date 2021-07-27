import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './Views.css';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'Flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={s.RegisterContainer}>
        <div className={s.RegisterSection}>
          <h1 className={s.RegisterTitle}>Registration</h1>
          <form
            onSubmit={this.handleSubmit}
            style={styles.form}
            autoComplete="off"
          >
            <label style={styles.label}>
              Имя
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
            <label style={styles.label}>
              Почта
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
            <label style={styles.label}>
              Пароль
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Зарегистрироваться</button>
          </form>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };
//то же самое, что:
const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(authOperations.register(data)),
});

export default connect(null, mapDispatchToProps)(RegisterView);
