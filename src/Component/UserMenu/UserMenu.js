import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

// import { getUserName, logOut } from 'redux/auth';
// import defaultAvatar from '../UserMenu/default-avatar';
// import s from './UserMenu.module.css';
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ name, avatar, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="Avatar" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  // avatar: defaultAvatar,
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
