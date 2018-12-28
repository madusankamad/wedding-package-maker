import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {NavigationBar} from './components/Navigation';
import {RootRoutes,MainRoutes} from "./routes";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                            <NavigationBar options={{navRoutes: MainRoutes}}/>
                    </header>
                    {/* Page Routes will go here */}
                    <RootRoutes/>
                </div>
            </Router>
        );
    }
}

export default App;
