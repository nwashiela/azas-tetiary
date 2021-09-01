import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Account } from "../../views/user/Account";


export const User = (props) => {
    const { user } = props;

    return (
        <Switch>
        
            <Route path="/user/account">
            <Account /> 
            </Route>
        </Switch>
    )
}

export default User;