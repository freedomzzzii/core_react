import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './UploadFile.css';

export default class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, children, handleSendImage } = this.props;

    return(
      <div className="UploadFile">
        <label className="upload-file">
          <input type="file" id={id} name={id} onChange={e => handleSendImage(e.target.files)} />
          {children}
        </label>
      </div>
    );
  }
}

UploadFile.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.any,
  handleSendImage: PropTypes.func,
};
