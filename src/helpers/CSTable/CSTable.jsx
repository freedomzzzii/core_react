import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

import './CSTable.css';

import { Loading } from '../../components';

export default class CSTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const {
      settings: { data, columns },
      handleRow,
      pageIndex,
      pageSize,
      handlePageChange,
      handlePageSizeChange,
      loading,
      sorted,
      onSortedChange,
    } = this.props;
    
    if (!data || loading) {
      return(<Loading />);
    }

    return (
      <div className={`CSTable${data.langth === 0 ? ' no-data' : ''}`}>
        {
          handleRow ?
            <ReactTable
              page={pageIndex}
              pageSize={pageSize}
              minRows={0}
              data={data}
              columns={columns}
              defaultPageSize={10}
              className={`data-table${data.length > 0 ? ' have' : ''}`}
              previousText={<i className="fas fa-angle-left"></i>}
              nextText={<i className="fas fa-angle-right"></i>}
              noDataText="ไม่มีข้อมูล"
              getTrProps={(state, rowInfo) => ({ id: `row-${rowInfo.original.id}` })}
              getTdProps={(state, rowInfo, column) => (handleRow(rowInfo, column))}
              onPageChange={pageIndex => handlePageChange(pageIndex)} 
              onPageSizeChange={(pageSize, pageIndex) => handlePageSizeChange(pageSize, pageIndex)}
              sorted={sorted}
              onSortedChange={newSorted => onSortedChange(newSorted)}
            />
            : <ReactTable
              page={pageIndex}
              pageSize={pageSize}
              minRows={0}
              data={data}
              columns={columns}
              defaultPageSize={10}
              className={`data-table${data.length > 0 ? ' have' : ''}`}
              previousText={<i className="fas fa-angle-left"></i>}
              nextText={<i className="fas fa-angle-right"></i>}
              noDataText="ไม่มีข้อมูล"
              getTrProps={(state, rowInfo) => ({ id: `row-${rowInfo.original.id}` })}
              onPageChange={pageIndex => handlePageChange(pageIndex)} 
              onPageSizeChange={(pageSize, pageIndex) => handlePageSizeChange(pageSize, pageIndex)}
              sorted={sorted}
              onSortedChange={newSorted => onSortedChange(newSorted)}
            />
        }
      </div>
    );
  }
}

CSTable.propTypes = {
  settings: PropTypes.shape({
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
  }).isRequired,
  handleRow: PropTypes.func,
  pageIndex: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  handlePageSizeChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  onSortedChange: PropTypes.func.isRequired,
  sorted: PropTypes.array.isRequired,
};
