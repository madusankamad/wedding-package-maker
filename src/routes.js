import React from 'react';
import {Route} from 'react-router-dom';
import {AlbumBuild} from './components/AlbumBuild';


export const MainRoutes = [
    {
        url: "/",
        exact: true,
        component: () => <div>Home Page</div>,
        navTitle: "Home Page"
    },
    {
        url: "/contact",
        component: () => <div>Contact Page</div>,
        navTitle: "Contact Page"
    },
    {
        url: "/albumBuild",
        component: AlbumBuild,
        navTitle: "album Build"
    }
];



export const RootRoutes = () => (<div>
    {MainRoutes.map((routeObj, index) => <Route exact={routeObj.exact} path={routeObj.url}
                                               key={index} component={routeObj.component}/>)}
</div>);