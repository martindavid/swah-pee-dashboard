import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';

import TableRenderer from './TableRenderer';

const mapStateToProps = state => ({
    films: state.page.films
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: 'FILM_PAGE_LOADED', payload })
})

class Film extends React.Component {

    componentWillMount() {
        this.props.onLoad(agent.API.all('films'));
    }

    render() {
        var header = ['episode_id','title','release_date','director'];
        return (
            <TableRenderer data={this.props.films} header={header} part="Film" />
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Film);