import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';
import About from './components/About';
import Page404 from './components/Page404';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/blog" component={Blog}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/page404" component={Page404}></Route>
        </Switch>
    </App>

    export default AppRoutes;