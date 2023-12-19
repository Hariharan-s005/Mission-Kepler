import React from 'react'
import PropTypes from 'prop-types';

export const Button = ({ name, style, onClick }) => {
  return (
    <>
      <button className={style} onClick={onClick}>{name}</button>
    </>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;