import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import Schema from './Schema'
// import Middleware from './Middleware'
// import ReducerPattern from './ReducerPattern'

function AddData(){
    return(
        <div>
            <div>
            <NavLink to='/Node/AddData/Schema'>Schema</NavLink>
            <Route path='/Node/AddData/Schema' component={Schema}/>
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

export default AddData;