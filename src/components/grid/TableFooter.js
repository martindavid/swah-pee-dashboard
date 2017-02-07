import React from 'react';

import './TableRenderer.css'

const TableFooter = props => {
    return (
        <div className="row table_footer">
            <div className="col-md-5">
                <div className="table_info" role="status" aria-live="polite">Showing 1 to 10 of 40 entries</div>
            </div>
            <div className="col-md-7">
                <div className="table_paginate">
                    <ul className="pagination">
                        <li className="paginate_button first disabled" id="datatables_first">
                            <a href="#" aria-controls="datatables" data-dt-idx="0">First</a>
                        </li>
                        <li className="paginate_button previous disabled" id="datatables_previous">
                            <a href="#" aria-controls="datatables" data-dt-idx="1">Previous</a>
                        </li>
                        <li className="paginate_button active">
                            <a href="#" aria-controls="datatables" data-dt-idx="2">1</a>
                        </li>
                        <li className="paginate_button ">
                            <a href="#" aria-controls="datatables" data-dt-idx="3">2</a>
                        </li>
                        <li className="paginate_button ">
                            <a href="#" aria-controls="datatables" data-dt-idx="3">3</a>
                        </li>
                        <li className="paginate_button next" id="datatables_next">
                            <a href="#" aria-controls="datatables" data-dt-idx="6">Next</a>
                        </li>
                        <li className="paginate_button last" id="datatables_last">
                            <a href="#" aria-controls="datatables" data-dt-idx="7">Last</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TableFooter;