import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { todosCreate } from '../actions/todos';

const ButtonCreate = props => (
  <button onClick={() => props.todosCreate()}>Add item</button>
);

ButtonCreate.propTypes = {
  todosCreate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  todosCreate: () => dispatch(todosCreate()),
});

export default connect(null, mapDispatchToProps)(ButtonCreate);
