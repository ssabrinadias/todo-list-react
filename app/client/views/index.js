import React from "react"
import ReactDOM from "react-dom"
import {combineReducers, createStore} from "redux"
import {Provider} from "react-redux"


const reducers = combineReducers({})

ReactDOM.render(
    <Provider store={createStore(reducers)} >
    </Provider>
    , document.getElementById('root')
)