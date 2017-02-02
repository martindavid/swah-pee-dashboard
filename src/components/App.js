import React from 'react';
import { connect } from 'react-redux';


import Sidebar from './Sidebar';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Sidebar />
                <div className="main-panel">
                    <Header />
                    <div className="content">
                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(() => ({}), () => ({}))(App);