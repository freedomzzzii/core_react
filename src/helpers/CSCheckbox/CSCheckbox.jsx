import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CSCheckbox.css';

export default class CSCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, id, value, csclass } = this.props;

    return(
      <div className={`CSCheckbox${csclass ? ` ${csclass}` : ''}`}>
        <label className="label">
          {label ? <span className="cs-label">{label}</span> : null}
          <input type="checkbox" id={id} value={value} />
          <span className="checkmark"></span>
        </label>
      </div>
    );
  }
}

CSCheckbox.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  csclass: PropTypes.string,
};
