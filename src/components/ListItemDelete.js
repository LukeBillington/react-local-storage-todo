import React from 'react';
import PropTypes from 'prop-types';

const ListItemDelete = (props) => {
  const { update } = props;
  return (
    <button onClick={update}>Delete</button>
  );
};

ListItemDelete.propTypes = {
  update: PropTypes.func.isRequired,
};

export default ListItemDelete;
