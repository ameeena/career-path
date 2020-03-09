import React from 'react'
import {Route, Switch } from 'react-router-dom'
import HomePage from './home/HomePage'
import ProfessionsPage from './professions/ProfessionsPage'
import Header from './common/Header';   
import PageNotFound from './PageNotFound'

function App() {
    return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component = {HomePage}/>
                    <Route path ="/profession" component = {ProfessionsPage}/>
                    <Route component = {PageNotFound}/>
                </Switch>
            </div>
    )
}
export default App;
