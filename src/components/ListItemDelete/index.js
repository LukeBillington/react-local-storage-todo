import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ListItemDelete = (props) => {
  const { update } = props;
  return (
    <button className="ListItemDelete" onClick={update}>Delete</button>
  );
};

ListItemDelete.propTypes = {
  update: PropTypes.func.isRequired,
};

export default ListItemDelete;
