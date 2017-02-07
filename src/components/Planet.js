import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';

import TableRenderer from './grid';

const mapStateToProps = state => ({
    planets: state.page.planets
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: 'PLANET_PAGE_LOADED', payload })
});

class Planet extends React.Component {

    componentWillMount() {
        this.props.onLoad(agent.API.all('planets'));
    }

    render() {
        var header = ['name', 'population', 'climate', 'orbital_period', 'terrain'];
        return (
            <TableRenderer data={this.props.planets} header={header} part="Planets" />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Planet);