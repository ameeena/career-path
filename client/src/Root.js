import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import App from './components/App'
import Default from './components/Default'
import Profession from './components/professions/professions'

const Root = ({store}) => (
    <Provider store = {store}>
        <Router>
            <div>
                <div>
                    {/* TO DO : Add a navbar here to redirect to links */}
                </div>
                <Switch>
                    <Route exact path="/" component = {App}/>
                    <Route path ="/profession" component = {Profession}/>
                    <Route component = {Default}/>
                    {/* multiple other components will be here */}
                </Switch>
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store : PropTypes.object.isRequired
};

export default Root;