import React from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";

export const Container = props=>(
    <div className='container'>{props.children}</div>
)