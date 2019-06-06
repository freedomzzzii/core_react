import React, { Component } from 'react';
import { Button, CarouselItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';

import './TemplateCSS.css';

import { fetchGetProvince } from '../../actions';

import { Loading } from '../../components';

import {
  Icon,
  UploadFile,
  CSRadio,
  CSCheckbox,
  FNTimeLeft,
  CSTable,
  CSCalendar,
  CSCarousel,
  CSModal,
} from '../../helpers';

const settingsFacebook = {
  path: 'M-.009 12c0-6.628 5.373-12 12-12s12 5.372 12 12c0 6.627-5.373 12-12 12s-12-5.373-12-12zm9.47-1.784v1.576h1.09v5.476h2.042v-5.476h1.616l.12-1.576h-1.736v-1.23c0-.424.379-.576.803-.576.423 0 .877.131.877.131l.272-1.614s-.578-.196-1.952-.196c-.844 0-1.334.321-1.691.793-.34.446-.351 1.166-.351 1.633v1.059H9.46z',
  fill: '#8c9090',
  size: 24,
};

const columns = [
  { Header: 'ID', accessor: 'id', headerClassName: 'column-id', className: 'column-id' },
  { Header: 'จังหวัด', accessor: 'province', headerClassName: 'column-province', className: 'column-province' },
];

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class TemplateCSS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      pageIndex: 0,
      pageSize: 10,
      selectDate: '',
      show: false,
      sorted: [],
    };
    props.dispatch(fetchGetProvince());
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
  
    if (data) {
      const arr = [];
      data.forEach((ele, i) => {
        arr.push({
          id: i + 1,
          province: ele.provinceName,
        });
      });
      this.setState({ data: arr });
    }
  }

  handlePageChange = pageIndex => this.setState({ pageIndex });

  handlePageSizeChange = (pageSize, pageIndex) => this.setState({ pageSize, pageIndex });

  handleDate = selectDate =>
    this.setState({
      selectDate: selectDate ?
        `${selectDate.getFullYear()}${selectDate.getMonth() + 1 < 10 ? `0${selectDate.getMonth() + 1}` : selectDate.getMonth()}${selectDate.getDate() < 10 ? `0${selectDate.getDate()}` : selectDate.getDate()}`
        : undefined,
    });

  handleModal = () => this.setState({ show: !this.state.show });

  handleSortTable = sorted => this.setState({ sorted });

  render() {
    const { data, pageSize, pageIndex, selectDate, show, sorted } = this.state;

    if (!data) {
      return(<Loading />);
    }

    const settings = {
      show,
      handleCloseModal: this.handleModal,
      btnLeft: 'ยกเลิก',
      btnRight: 'ยืนยัน',
      funcBtnRight: this.handleModal,
      title: 'title',
    };

    return(
      <div className="TemplateCSS">
        <div className="title">color button</div>
        <div>
          <Button className="btn-green">btn-green</Button>
          <Button className="btn-green2">btn-green2</Button>
          <Button className="btn-gray">btn-gray</Button>
          <Button className="btn-blue">btn-blue</Button>
          <Button className="btn-blue-white">btn-blue-white</Button>
          <Button className="btn-white">btn-white</Button>
          <Button className="btn-black">btn-black</Button>
          <Button className="btn-red">btn-red</Button>
        </div>
        <div className="title">btn min</div>
        <div>
          <Button className="btn-green btn-min">btn-green</Button>
          <Button className="btn-green2 btn-min">btn-green2</Button>
          <Button className="btn-gray btn-min">btn-gray</Button>
          <Button className="btn-blue btn-min">btn-blue</Button>
          <Button className="btn-blue-white btn-min">btn-blue-white</Button>
          <Button className="btn-white btn-min">btn-white</Button>
          <Button className="btn-black btn-min">btn-black</Button>
          <Button className="btn-red btn-min">btn-red</Button>
        </div>
        <div className="title">avatar</div>
        <div className="avatar">T</div>
        <div className="title">Icon svg</div>
        <div>
          <Icon settings={settingsFacebook} /> 
        </div>
        <div className="title">browe file</div>
        <UploadFile id="file" />
        <div className="title">radio btn</div>
        <div>
          <CSRadio name="sex" id="sex-man" value="sex-man" label="ชาย" />
          <CSRadio name="sex" id="sex-woman" value="sex-woman" label="หญิง" />
        </div>
        <div className="title">checkbox</div>
        <div>
          <CSCheckbox label="ชาย" id="male" value="male" />
          <CSCheckbox label="หญิง" id="female" value="female" />
        </div>
        <div className="title">timeleft</div>
        <div>{FNTimeLeft('2018-05-25T10:31:52.000+0000')}</div>
        <div className="title">table</div>
        <CSTable
          settings={{
            data,
            columns,
          }}
          pageIndex={pageIndex}
          pageSize={pageSize}
          handlePageChange={this.handlePageChange}
          handlePageSizeChange={this.handlePageSizeChange}
          onSortedChange={this.handleSortTable}
          sorted={sorted}
        />
        <div className="title">calendar</div>
        <label>วันที่</label>
        <CSCalendar
          inputValue={selectDate}
          handleDate={this.handleDate}
          placeholder="วันที่"
          fromMonth={new Date(2018, 0)}
          toMonth={new Date(new Date().getFullYear() + 3, 11)}
          disabledDays={[]}
        />
        <div className="title">carousel</div>
        <CSCarousel>
          <CarouselItem
            id="carousel-item-1"
            key="1"
          >
            <img
              className="d-block w-100"
              src="https://dev-file-api.cashnow.co.th/api/Files/view/8658a1be-1147-4e8a-841d-f2d789bad4b5"
              alt=""
            />
          </CarouselItem>
          <CarouselItem
            id="carousel-item-2"
            key="2"
          >
            <img
              className="d-block w-100"
              src="https://dev-file-api.cashnow.co.th/api/Files/view/8658a1be-1147-4e8a-841d-f2d789bad4b5"
              alt=""
            />
          </CarouselItem>
        </CSCarousel>
        <div className="title">modal</div>
        <Button className="btn-green2 btn-min" onClick={this.handleModal}>open modal</Button>
        <CSModal settings={settings}>
          <div>
            body modal
          </div>
        </CSModal>
        <div className="title">select box</div>
        <Select options={options} closeMenuOnSelect={false} isMulti />
      </div>
    );
  }
}

TemplateCSS.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.array,
};

const mapStateToProps = state => {
  const { getProvince: { data } } = state;
  
  return { data };
};

export default connect(mapStateToProps)(TemplateCSS);
