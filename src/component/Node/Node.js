import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import WebAPI from './WebAPI/Server-Side'
import Redux from './Redux'
import AsyncRedux from './AsyncRedux'
import ReducerPattern from './ReducerPattern'

function Node(){
    return(
        <div>
            <div>
            <NavLink to='/webapp2/Node/WebAPI'>Web API</NavLink>
            <Route path='/webapp2/Node/WebAPI' component={WebAPI}/>
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