import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { todosFetch } from '../actions/todos';
import ButtonCreate from './ButtonCreate';
import ListItem from './ListItem';

class List extends Component {
  componentDidMount() {
    this.props.todosFetch();
  }

  render() {
    const { todos } = this.props;
    return (
      <Fragment>
        <ButtonCreate />
        <ul>
          {
            Object
              .keys(todos.sort((a, b) => a.checked - b.checked))
              .map((key) => {
                const todo = todos[key];
                return (
                  <ListItem key={key} index={key} todo={todo} />
                );
              })
          }
        </ul>
      </Fragment>
    );
  }
}

List.propTypes = {
  todosFetch: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  loading: state.todos.loading,
  todos: state.todos.todos,
});

const mapDispatchToProps = dispatch => ({
  todosFetch: () => dispatch(todosFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
