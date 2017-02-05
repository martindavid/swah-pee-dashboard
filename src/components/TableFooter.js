import React from 'react';


const TableFooter = props => {
    return (
        <div className="row">
            <div className="col-md-5">
                <div id="datatables_info" role="status" aria-live="polite">Showing 1 to 10 of 40 entries</div>
            </div>
            <div className="col-md-7">
                {/* PUT PAGINATION HERE */}
            </div>
        </div>
    );
}

export default TableFooter;