import React from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";

export const Layout = props=>(
    <div className='layout'>{props.children}</div>
)