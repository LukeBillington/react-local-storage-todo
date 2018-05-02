import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ListItemText = (props) => {
  const { text, update } = props;
  return (
    <input className="ListItemText" type="text" value={text} onChange={update} />
  );
};

ListItemText.propTypes = {
  text: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};

export default ListItemText;
