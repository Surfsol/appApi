import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import Server-Side from './Server-Side'
import Middleware from './Middleware'
import Deploy from './Deploy'
import ReducerPattern from './ReducerPattern'

function Node(){
    return(
        <div>
            <div>
            <NavLink to='/webapp2/Node/Server-Side'>Web API</NavLink>
            <Route path='/webapp2/Node/Server-Side' component={Server-Side}/>
            </div>
            {/* <div>
            <NavLink to='/webapp2/Node/Client-Side'>Client-Side</NavLink>
            <Route path='/webapp2/Node/Client-Side' component={Client-Side}/>
            </div>
            <div>
            <NavLink to='/webapp2/Node/Deploying'>Deploying</NavLink>
            <Route path='/webapp2/Node/Deploying' component={Deploying}/>
            </div>
            <div>
            <NavLink to='/webapp2/Node/HTTP'>HTTP</NavLink>
            <Route path='/webapp2/Node/HTTP' component={HTTP}/>
            </div> */}
        </div>
       
    )

}

export default Node;