import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { settings: { path, fill, size } } = this.props;

    return(
      <svg className="Icon" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <path fill={fill} d={path}/>
      </svg>
    );
  }
}

Icon.propTypes = {
  settings: PropTypes.shape({
    path: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  }).isRequired,
};
