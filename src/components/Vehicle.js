import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';

import TableRenderer from './grid';

const mapStateToProps = state => ({
    vehicle: state.page.vehicle
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: 'VEHICLE_PAGE_LOADED', payload })
})

class Vehicle extends React.Component {

    componentWillMount() {
        this.props.onLoad(agent.API.all('vehicles'));
    }

    render() {
        var header = ['name','model','crew', 'passengers','manufacturer'];
        return (
            <TableRenderer data={this.props.vehicle} header={header} part="Vehicle" />
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Vehicle);