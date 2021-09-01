import React from "react"
import { Switch, Route} from "react-router-dom"
import {ItemsList} from "../../views/Items/ItemsList"
import {Add} from "../../views/Items/Add"

export const Items = () => {
    return (
        <Switch>
            <Route path="/items/add">
                <Add />
            </Route>

            <Route path="/items/list">
                <ItemsList />
            </Route>
        </Switch>
    )
}
export default Items