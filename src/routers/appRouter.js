import React                                         from 'react';
//BrowserRouter is to create router once and router is for every page 
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header                                        from '../components/header';
import ExpenseDashboardPage                          from '../components/expenseDashboardPage';       
import AddExpensePage                                from '../components/addExpensePage';
import EditExpensePage                               from '../components/editExpensePage';
import HelpPage                                      from '../components/helpPage';
import NotFoundPage                                  from '../components/notFoundPage';

//we add exact={true} to return ExpenseDashboardPage exactly when / is not when /create of others get called 
//if do not define exact={true} the component of path / will be loadded in every single path 
//in order to make use of 404 pages we have to import switch 
//switch go through route maps and stops the moment it get the first match so it does'nt get afterward matchs
//BrowserRouter should only have one child so we have to put a div in it 
const AppRouter = (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/"         component={ExpenseDashboardPage} exact={true} /> 
            <Route path="/create"   component={AddExpensePage} />
            <Route path="/edit"     component={EditExpensePage} />
            <Route path='/help'     component={HelpPage}/>
            <Route                  component={NotFoundPage}/>
        </Switch>  
    </div>
         
    </BrowserRouter>
);
export default AppRouter;