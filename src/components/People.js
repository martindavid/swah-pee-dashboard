import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';

import TableRenderer from './TableRenderer';

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
        console.log(this.state);
        return (
            <TableRenderer peoples={this.props.peoples} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People);