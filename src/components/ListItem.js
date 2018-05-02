import React from 'react';
import PropTypes from 'prop-types';
import ButtonCheck from './ButtonCheck';

const ListItem = (props) => {
  const { index, todo } = props;
  return (
    <li>
      { index }
      <ButtonCheck checked={todo.checked} />
      <input type="text" value={todo.text} />
    </li>
  );
};

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
};

export default ListItem;
