import React from 'react';


class Header extends React.Component {
    
    render() {
        return (
            <nav className="navbar navbar-transparent navbar-absolute">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">Star Wars API Explorer</a>
					</div>
				</div>
			</nav>
        );
    }
}

export default Header;