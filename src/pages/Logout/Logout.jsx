import React from 'react';

import commonConstant from '../../common/commonConstant';
import { createCookieSample, deleteCookieSample } from '../../common/commonFunction';
import { Button } from '../../shared/components';
import { history } from '../../shared/functions';

const Logout = () => {
  deleteCookieSample();

  const handleLogin = () => {
    createCookieSample('eiei');

    return history.push(commonConstant.pathHome);
  };

  return (
    <div className="Logout">
      <div className="title">Logout</div>
      <Button onClick={handleLogin}>login</Button>
    </div>
  );
};

export default Logout;
