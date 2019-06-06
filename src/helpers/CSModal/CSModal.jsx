import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import './CSModal.css';

import { Loading } from '../../components';

export default class CSModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      settings: {
        show,
        handleCloseModal,
        btnLeft,
        btnRight,
        funcBtnRight,
        title,
        loading,
      },
      children,
    } = this.props;

    return(
      <div className="CSModal">
        <Modal className="CSMyModal" isOpen={show} toggle={this.toggle} id="myModal">
          <ModalHeader className="csmodal-header">
            {title ? <span className="title">{title}</span> : null}
            <Button className="csbtn-close" type="button" onClick={handleCloseModal} id="cs-modal-btn-close">
              <span aria-hidden="true">&times;</span>
            </Button>
          </ModalHeader>
          <ModalBody className="csmodal-body">
            {children}
          </ModalBody>
          <ModalFooter className={`csmodal-footer${btnLeft ? ' justify' : ''}`}>
            { btnLeft ? <Button type="button" className="btn-red" onClick={handleCloseModal} id="cs-modal-btn-left">{btnLeft}</Button> : null }
            { btnRight ? <Button type="button" className="btn-green2" onClick={funcBtnRight} id="cs-modal-btn-right">{btnRight}</Button> : null }
          </ModalFooter>
        </Modal>
        { loading ? <Loading /> : null }
      </div>
    );
  }
}

CSModal.propTypes = {
  settings: PropTypes.shape({
    title: PropTypes.string,
    show: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    btnLeft: PropTypes.string,
    btnRight: PropTypes.string.isRequired,
    funcBtnRight: PropTypes.func.isRequired,
    loading: PropTypes.bool,
  }).isRequired,
  children: PropTypes.element,
};
