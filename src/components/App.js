import React from 'react';


import Sidebar from './Sidebar';
import Header from './Header';

class App extends React.Component {


    render() {
        return (
            <div className="wrapper">
                <Sidebar />
                <div className="main-panel">
                    <Header />
                </div>
            </div>
        );
    }
}

export default App;