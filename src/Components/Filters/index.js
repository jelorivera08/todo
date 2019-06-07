import React from 'react';
import styles from './index.module.css';
import { connect } from 'react-redux';
import { FILTERS } from '../../constants';
import { changeFilter } from '../../actions';

const Filters = (props) => {
  const { activeFilter, changeFilter } = props;

  return (
    <div className={styles.Filter}>
      <button
        onClick={() => changeFilter(FILTERS.ALL)}
        className={
          activeFilter === FILTERS.ALL ? 'green-button' : 'blue-button'
        }
      >
        All
      </button>
      <button
        onClick={() => changeFilter(FILTERS.DONE)}
        className={
          activeFilter === FILTERS.DONE ? 'green-button' : 'blue-button'
        }
      >
        Done
      </button>
      <button
        onClick={() => changeFilter(FILTERS.PENDING)}
        className={
          activeFilter === FILTERS.PENDING ? 'green-button' : 'blue-button'
        }
      >
        Pending
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeFilter: state.filters.activeFilter,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
