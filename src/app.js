import React         from 'react';
import ReactDOM      from 'react-dom';
import routes        from './routers/appRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';



ReactDOM.render(routes, document.getElementById('app'));