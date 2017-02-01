import React from 'react';

class Sidebar extends React.Component {

    render() {
        return (
            <div className="sidebar" data-color="purple">
                <div className="logo">
                    <a href="#" className="simple-text">
                        Swah-Pee
                    </a>
                </div>

                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="active">
                            <a href="dashboard.html">
                                <i className="material-icons">dashboard</i>
                                <p>Home</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;