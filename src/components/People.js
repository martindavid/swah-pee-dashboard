import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';

import TableRenderer from './grid';

const mapStateToProps = state =>({
    peoples: state.page.peoples
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: 'PEOPLE_PAGE_LOADED', payload })
});

class People extends React.Component {
    componentWillMount() {
        this.props.onLoad(agent.API.all('people'));
    }

    render() {
        var selectedField = ["name", "height", "birth_year","gender", "hair_color", "skin_color"];
        return (

            <TableRenderer data={this.props.peoples} part="People" header={selectedField} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People);