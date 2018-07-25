import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Bundle from './bundle'
import Top from "../views/layout/top";
import Home from "../views/layout/home";

import Test from '../test' //测试


export default class extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/top' component={Top}></Route>
                <Route exact path='/test' component={Test}></Route>
                <Route path='/login' component={Bundle(() => import('../views/sign/login'))}></Route>
                <Route path='/register' component={Bundle(() => import('../views/sign/register'))}></Route>
            </Switch >
        )
    }
}