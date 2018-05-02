import React from 'react';
import PropTypes from 'prop-types';

const ButtonCheck = (props) => {
  const { checked } = props;
  return (
    <input type="checkbox" checked={checked} />
  );
};

ButtonCheck.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default ButtonCheck;
