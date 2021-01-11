import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import commonConstant from '../../common/commonConstant';
import { getCookieSample } from '../../common/commonFunction';

const Oops = () => (
  <div className="Oops">
    <div className="title">oops</div>
    {
      getCookieSample() ?
        <Link className="btn btn-primary" to={commonConstant.pathHome}>redirect home</Link>
        : <Link className="btn btn-primary" to={commonConstant.pathLogout}>redirect logout</Link>
    }
  </div>
);

export default Oops;
