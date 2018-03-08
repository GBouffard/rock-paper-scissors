import React from 'react';
import PropTypes from 'prop-types';

const tagOptions = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export default function Heading({ tag, children, className }) {
  const Tag = tag;

  let headingElement;
  if (tagOptions.includes(tag)) {
    headingElement = (
      <Tag
        className={className} >
        {children}
      </Tag>
    );
  }
  return headingElement;
}

Heading.defaultProps = {
  tag: 'h1'
};

Heading.propTypes = {
  tag: PropTypes.oneOf(tagOptions),
  children: PropTypes.node,
  className: PropTypes.string
};
