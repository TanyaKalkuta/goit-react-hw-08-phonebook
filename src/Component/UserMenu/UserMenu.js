import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../UserMenu/default-avatar.png';
import styles from './UserMenu.module.css';
import { Button } from '@material-ui/core';

const UserMenu = ({ name, avatar, onLogout }) => (
  <div className={styles.container}>
    <img src={avatar} alt="Avatar" className={styles.avatar} />
    <span className={styles.name}>Welcome, {name}</span>
    <Button type="button" onClick={onLogout} variant="outlined" color="primary">
      Logout
    </Button>
  </div>
);
const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

// const UserMenu = ({ name, avatar, onLogout }) => {
//   return (
//     <div className={s.container}>
//       <div>
//         <img src={avatar} alt="Avatar" className={s.avatar} />
//       </div>
//       <span className={s.name}>
//         Welcome, {name.slice(0, 1).toUpperCase()}
//         {name.slice(1)}
//       </span>
//       <Button
//         type="button"
//         onClick={onLogout}
//         style={{ marginTop: '05px' }}
//         variant="contained"
//         color="primary"
//       >
//         Logout
//       </Button>
//     </div>
//   );
// };
// const mapStateToProps = state => ({
//   name: getUserName(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
