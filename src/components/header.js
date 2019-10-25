import React from 'react';
import {NavLink} from 'react-router-dom';

//to use activeClassName > isActive properly we should you exact={true} otherwise the home icon get the same class as 
//the route we are in it because they both start with a / 
const Header = ()=>(
    <div>
        <h1>Jexpense</h1>
       
            <NavLink to="/"       activeClassName="isActive" exact={true}>Home   </NavLink>
            <NavLink to="/create" activeClassName="isActive" exact={true}>Create </NavLink>
            <NavLink to="/help"   activeClassName="isActive" exact={true}>Help   </NavLink>

    </div>
);
export default Header; 