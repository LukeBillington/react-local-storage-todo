import React from 'react';
import PropTypes from 'prop-types';

const ListItemCheck = (props) => {
  const { checked } = props;
  return (
    <input type="checkbox" checked={checked} onChange={props.update} />
  );
};

ListItemCheck.propTypes = {
  checked: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired,
};

export default ListItemCheck;
