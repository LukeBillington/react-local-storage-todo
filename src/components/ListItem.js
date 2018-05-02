import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { todosUpdate } from '../actions/todos';
import ListItemCheck from './ListItemCheck';
import ListItemText from './ListItemText';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateText = this.handleUpdateText.bind(this);
    this.handleUpdateCheck = this.handleUpdateCheck.bind(this);
  }

  handleUpdateText(event) {
    const { index, todo } = this.props;
    this.props.todosUpdate(index, Object.assign({}, todo, { text: event.target.value }));
  }

  handleUpdateCheck(event) {
    const { index, todo } = this.props;
    this.props.todosUpdate(index, Object.assign({}, todo, { checked: event.target.checked }));
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        <ListItemCheck checked={todo.checked} update={this.handleUpdateCheck} />
        <ListItemText text={todo.text} update={this.handleUpdateText} />
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
};

const mapDispatchToProps = dispatch => ({
  todosUpdate: (index, todo) => dispatch(todosUpdate(index, todo)),
});

export default connect(null, mapDispatchToProps)(ListItem);
