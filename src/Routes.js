import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from "./js/Home";
import Profile from "./js/Profile";

export default function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>

    )
}