import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import ServerSide from './Server-Side'
// import Middleware from './Middleware'
import Deployment from './Deployment'
// import ReducerPattern from './ReducerPattern'

function Node(){
    return(
        <div>
            <div>
            <NavLink to='/Node/WebAPI/server-side'>Server Side</NavLink>
            <Route path='/Node/WebAPI/server-side' component={ServerSide}/>
            </div>
            <div>
            <NavLink to='/Node/WebAPI/deployment'>Deployment</NavLink>
            <Route path='/Node/WebAPI/Deployment' component={Deployment}/>
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