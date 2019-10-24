import React         from 'react';
import ReactDOM      from 'react-dom';
//BrowserRouter is to create router once and router is for every page 
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboardPage = ()=>(
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense component
    </div>
);

const EditExpencePage=()=>(
    <div>
        This is Edit page
    </div>
);

const HelpPage=()=>(
    <div>
        This is Help page
    </div>
);

//we add exact={true} to return ExpenseDashboardPage exactly when / is not when /create of others get called 
//if do not define exact={true} the component of path / will be loadded in every single path 
const routes = (
    <BrowserRouter>
        <div>
            <Route path="/"         component={ExpenseDashboardPage} exact={true} /> 
            <Route path="/create"   component={AddExpensePage} />
            <Route path="/edit"     component={EditExpencePage} />
            <Route path='/help'     component={HelpPage}/>
        </div>    
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));