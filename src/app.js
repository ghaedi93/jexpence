import React         from 'react';
import ReactDOM      from 'react-dom';
//BrowserRouter is to create router once and router is for every page 
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const routes = (
    <BrowserRouter>
    
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));