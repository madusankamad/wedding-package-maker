import React,{Component} from 'react';
import {withRouter,Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Navigation extends Component{

    render(){
        const {navRoutes} = this.props.options;
        const {pathname} = this.props.location;
        return(<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {navRoutes.map((nav,index)=><li key={index} className={`nav-item ${pathname===nav.url ? 'active' : ''}`}>
                        <Link className="nav-link" to={nav.url}>{nav.navTitle}</Link>
                    </li>)}
                </ul>
            </div>
        </nav>);
    }
}

export const NavigationBar = withRouter(Navigation);
Navigation.propTypes = {
    options: PropTypes.object.isRequired
};

