import React from "react";
import Home from "./containers/Home";
import { Route,Routes } from "react-router";
 
const Router = () => {
    return (
        <Routes>
            <Route exact path = {'/'} element = {<Home/>} />
        </Routes>
    )
}

export default Router;