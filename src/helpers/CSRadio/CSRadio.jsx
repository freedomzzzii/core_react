import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CSRadio.css';

export default class CSRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, id, name, value } = this.props;

    return(
      <div className="CSRadio">
        <label className="label">
          {label ? <span className="cs-label">{label}</span> : null}
          <input type="radio" name={name} id={id} value={value} />
          <span className="checkmark"></span>
        </label>
      </div>
    );
  }
}

CSRadio.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
