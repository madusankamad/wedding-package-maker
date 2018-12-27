import React, {Component} from 'react';
import logo from './logo.svg';
import _ from 'lodash';
import {ContactPage} from "./components/ContactPage";

const MainRoutes = {
    homePage: {
        url: "/",
        component: "",
        navTitle: "Home Page"
    },
    contactPage: {
        url: "/contact",
        component: "",
        navTitle: "Contact Page"
    }
};

const RouteKeys = _.keys(MainRoutes);

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {RouteKeys.map((routeObj,index)=> <h1 key={index}>{MainRoutes[routeObj].navTitle}</h1>)}
            </div>
        );
    }
}

export default App;
