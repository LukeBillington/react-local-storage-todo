import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ListItemDelete = (props) => {
  const { visible, update } = props;
  return (
    <button className={`ListItemDelete${visible ? '' : ' hidden'}`} onClick={update}>Delete</button>
  );
};

ListItemDelete.propTypes = {
  visible: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired,
};

export default ListItemDelete;
