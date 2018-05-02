import React from 'react';
import PropTypes from 'prop-types';

const ListItemText = (props) => {
  const { text } = props;
  return (
    <input type="text" value={text} onChange={props.update} />
  );
};

ListItemText.propTypes = {
  text: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};

export default ListItemText;
