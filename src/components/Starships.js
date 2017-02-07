import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';

import TableRenderer from './grid';

const mapStateToProps = state => ({
    starships: state.page.starships
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: 'STARSHIP_PAGE_LOADED', payload })
})

class Starships extends React.Component {

    componentWillMount() {
        this.props.onLoad(agent.API.all('starships'));
    }

    render() {
        var header = ['name','model','starship_class','manufacturer', 'hyperdrive_rating'];
        return (
            <TableRenderer data={this.props.starships} header={header} part="Starships" />
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Starships);