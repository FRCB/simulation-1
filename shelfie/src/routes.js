import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard.js';
import Add from './component/Add.js';
import Edit from './component/Edit.js';


export default (
    < Switch >
        <Route exact component={Dashboard} path='/' />
        <Route component={Add} path='/add' />
        <Route component={Edit} path='/edit/:id' />
    </Switch >
)