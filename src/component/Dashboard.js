import React from 'react';
import {Route, NavLink} from 'react-router-dom'
import Node from './Node/Node'


function Dashboard(){

    return(
       <div>
        <NavLink to='/node'>Node</NavLink>
        <Route path='/node' component={Node}/>
        {/* <NavLink to='/node'>Node</NavLink>
        <Route path='/node' component={Node}/> */}
        </div> 
    )
}

export default Dashboard;