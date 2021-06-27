import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Main from './pages/main'
import About from './pages/about'
import store from './store'

render(
    <StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Route path="/" exact component={Main}></Route>
                <Route path="/about" exact component={About}></Route>
            </HashRouter>
        </Provider>
    </StrictMode>,
    document.getElementById("root")
)