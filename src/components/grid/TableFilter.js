import React from 'react';
import { connect } from 'react-redux';

const TableFilter = props => {
    return (
        <div className="filter-area">
            <div className="row">
                <div className="col-md-6 col-xs-6">
                    <div className="form-inline">
                        <div className="form-group">
                        <label>Show</label>
                        <select className="form-control">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="-1">All</option>
                        </select>
                        <label>entries</label>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-xs-6 pull-right">
                    <div className="form-group">
                        <input type="search" className="col-md-4 form-control input-sm" placeholder="Search records" aria-controls="datatables" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableFilter;