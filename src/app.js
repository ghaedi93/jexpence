import React         from 'react';
import ReactDOM      from 'react-dom';
//BrowserRouter is to create router once and router is for every page 
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

//to use activeClassName > isActive properly we should you exact={true} otherwise the home icon get the same class as 
//the route we are in it because they both start with a / 
const Header = ()=>(
    <div>
        <h1>Jexpense</h1>
       
            <NavLink to="/"       activeClassName="isActive" exact={true}>Home   </NavLink>
            <NavLink to="/create" activeClassName="isActive" exact={true}>Create </NavLink>
            <NavLink to="/edit"   activeClassName="isActive" exact={true}>Edit   </NavLink>
            <NavLink to="/help"   activeClassName="isActive" exact={true}>Help   </NavLink>

    </div>
);

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
const NotFoundPage=()=>(
    <div>
        404 -  <Link to="/">Go Home</Link>
    </div>
);

//we add exact={true} to return ExpenseDashboardPage exactly when / is not when /create of others get called 
//if do not define exact={true} the component of path / will be loadded in every single path 
//in order to make use of 404 pages we have to import switch 
//switch go through route maps and stops the moment it get the first match so it does'nt get afterward matchs
//BrowserRouter should only have one child so we have to put a div in it 
const routes = (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/"         component={ExpenseDashboardPage} exact={true} /> 
            <Route path="/create"   component={AddExpensePage} />
            <Route path="/edit"     component={EditExpencePage} />
            <Route path='/help'     component={HelpPage}/>
            <Route         component={NotFoundPage}/>
        </Switch>  
    </div>
         
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));