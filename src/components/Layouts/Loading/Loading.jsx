import React, { Component } from 'react';

import './Loading.css';

const loadingImg = '/img/loading.gif';

class Loading extends Component {
  render () {
    return(
      <div className="Loading">
        <div className="loading-box">
          <img className="loading-img" src={loadingImg} alt="loadingImg" />
          <div className="loading-txt">กรุณารอสักครู่</div>
        </div>
      </div>
    );
  }
}

export default Loading;
