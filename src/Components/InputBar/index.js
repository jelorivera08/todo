import React from 'react';
import styles from './InputBar.module.css';
import { connect } from 'react-redux';
import { addATodo } from '../../actions';
import { bindActionCreators } from 'redux';

const InputBar = (props) => {
  const handleKeyPress = (e) => {
    var code = e.keyCode || e.which;
    if (code === 13) {
      props.addATodo(e.target.value);
      e.target.value = '';
    }
  };

  return (
    <div className={styles.InputBar}>
      <input
        placeholder="What are you up to?"
        className={styles.input}
        onKeyPress={handleKeyPress}
        type="text"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addATodo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBar);
