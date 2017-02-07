import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';

import TableRenderer from './grid';

const mapStateToProps = state => ({
    species: state.page.species
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: 'SPECIES_PAGE_LOADED', payload })
})

class Species extends React.Component {

    componentWillMount() {
        this.props.onLoad(agent.API.all('species'));
    }

    render() {
        var header = ['name','designation','classification','skin_colors', 'language'];
        return (
            <TableRenderer data={this.props.species} header={header} part="Species" />
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Species);