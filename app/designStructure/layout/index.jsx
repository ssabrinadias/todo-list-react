import React from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";

export default (props) =>(
    <div className='layout'>{props.children}</div>
)