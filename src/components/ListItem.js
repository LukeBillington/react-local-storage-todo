import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { todosUpdate, todosDelete } from '../actions/todos';
import ListItemCheck from './ListItemCheck';
import ListItemText from './ListItemText';
import ListItemDelete from './ListItemDelete';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateText = this.handleUpdateText.bind(this);
    this.handleUpdateCheck = this.handleUpdateCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleUpdateText(event) {
    const { index, todo } = this.props;
    this.props.todosUpdate(index, Object.assign({}, todo, { text: event.target.value }));
  }

  handleUpdateCheck(event) {
    const { index, todo } = this.props;
    this.props.todosUpdate(index, Object.assign({}, todo, { checked: event.target.checked }));
  }

  handleDelete() {
    const { index } = this.props;
    this.props.todosDelete(index);
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        <ListItemCheck checked={todo.checked} update={this.handleUpdateCheck} />
        <ListItemText text={todo.text} update={this.handleUpdateText} />
        <ListItemDelete update={this.handleDelete} />
      </li>
    );
  }
}

ListItem.propTypes = {
  index: PropTypes.string.isRequired,
  todo: PropTypes.shape({
    text: PropTypes.string,
    checked: PropTypes.bool,
  }).isRequired,
  todosUpdate: PropTypes.func.isRequired,
  todosDelete: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  todosUpdate: (index, todo) => dispatch(todosUpdate(index, todo)),
  todosDelete: index => dispatch(todosDelete(index)),
});

export default connect(null, mapDispatchToProps)(ListItem);
