import React from 'react';
import {Route, NavLink} from 'react-router-dom'
import WebApp2 from './WebApp2'
import Node from './Node/Node'


function Dashboard(){

    return(
       <div>
        <NavLink to='/webapp2'>Web Applications II</NavLink>
        <Route path='/webapp2' component={WebApp2}/>
        <NavLink to='/node'>Node</NavLink>
        <Route path='/node' component={Node}/>
        
        <div>
            <li><a target="_blank" href="https://github.com/AirBNBOptimalPrice/frontend/blob/master/airbnb/src/components/FormikOptForm.js">Github to build AirBNBOptimalPrice</a></li>
        </div>
        </div> 
    )
}

export default Dashboard;