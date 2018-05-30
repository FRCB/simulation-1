import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard.js';
import Add from './component/Add.js';

export default (
    < Switch >
        <Route exact component={Dashboard} path='/' />
        <Route component={Add} path='/add' />
    </Switch >
)