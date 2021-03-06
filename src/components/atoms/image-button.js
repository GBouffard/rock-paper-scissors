import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const ImageButton = (props) => {
  const imageElement = (
    <img
      alt=""
      className="spread-button-image"
      src={props.url} />
  );

  return (
    <Button
      children={imageElement}
      {...props} />
  );
};

export default ImageButton;

ImageButton.propTypes = {
  url: PropTypes.string.isRequired
};