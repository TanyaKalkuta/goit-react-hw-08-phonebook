// import PropTypes from 'prop-types';
import React from 'react';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-action';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Find contact by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  );
};
// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
