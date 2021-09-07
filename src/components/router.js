import React from 'react'
import { Switch, Route } from "react-router-dom" 
import Home from '../components/home'
import About from '../components/about'
import Members from './Members'
import MemberForm from './MemberForm'

const Router = () => {

    return (
        <Switch>
            <Route exact path ='/' component={Home}/>
            <Route exact path ='/about' component={About}/>
            <Route exact path ='/members' component={Members}/>
            <Route exact path ='/MemberForm' component={MemberForm}/>
            

            
        </Switch>
    )
}

export default Router