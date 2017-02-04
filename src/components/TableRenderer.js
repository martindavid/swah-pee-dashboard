import React from 'react';

import './TableRenderer.css';

const TbodyRenderer = props => {
    if (props) {
        var list = props.data.map(function (val, index) {
            return (
                <td key={index}>{val}</td>
            );
        })
        return (
            <tr>
                { list }
            </tr>
        );
    }
    return null;
}

const TableRenderer = props => {
    if (props.data) {
        var headerList = props.header.map(function (key, index) {
            return <th key={index}>{key.replace("_", " ")}</th>;
        });

        var detailData = props.data.map(function (val, index) {
            var filteredData = props.header.map(function (header) {
                if (header !== undefined) {
                    return val[header];
                }
            });
            return filteredData;
        });

        var tbody = detailData.map(function (val, index) {
            return (
                <TbodyRenderer key={index} data={val}></TbodyRenderer>
            );
        })

        return (
            <div className="card">
                <div className="card-header" data-background-color="purple">
                    <h4 className="title">{props.part} List</h4>
                    <p className="category">List for {props.part.toLowerCase()} data</p>
                </div>
                <div className="card-content table-responsive">
                    <table className="table">
                        <thead className="text-primary">
                            <tr>
                                {headerList}
                            </tr>
                        </thead>
                        <tbody>
                            {tbody}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
    else {
        return null;
    }

};

export default TableRenderer;