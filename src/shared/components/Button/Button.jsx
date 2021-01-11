import React from 'react';
import Proptypes from 'prop-types';
import { Button as ButtonLib } from 'reactstrap';

const Button = props => <ButtonLib className={props.className} {...props}>{props.children}</ButtonLib>;

Button.propTypes = {
  'className': Proptypes.string,
  'children': Proptypes.any,
};

export default Button;
