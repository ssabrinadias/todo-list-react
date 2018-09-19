import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import initializeStore from "../store/index"


ReactDOM.render(
    <Provider store={initializeStore} >
    </Provider>
    , document.getElementById('root')
)