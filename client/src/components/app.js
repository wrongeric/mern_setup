import React from 'react';
import Home from './home';
import {Route, Link} from 'react-router-dom';
import About from './about';
import Contact from './contact';
import ApiTest from './api_test';

const App = () => (
    <div>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/test">API Test</Link>
                </li>
            </ul>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/test" component={ApiTest}/>
        </div>
    </div>
);

export default App;
