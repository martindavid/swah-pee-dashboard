import React from 'react';
import { Link } from 'react-router';

class NavItem extends React.Component {
    
    render() {
        const { router } = this.context;
        const { iconName, onlyActiveOnIndex, to, children } = this.props;

        const isActive = router.isActive(to, onlyActiveOnIndex);

        return (
            <li className={isActive ? 'active' : ''}>
                <Link to={this.props.to}>
                    <i className="material-icons">{iconName}</i>
                    <p>{children}</p>
                </Link>
            </li>
        );
    }
}

NavItem.contextTypes = {
    router: React.PropTypes.object
}

export default NavItem;