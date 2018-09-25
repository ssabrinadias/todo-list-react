import React from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";

export const FiltersModule =  (props)=>(
    <div className='filters'>{props.children}</div>
)


export const SelectModule =  (props)=>(
    <select onChange={props.change} className="select">
        {React.Children.map(props.children, child => child)}
    </select>
)
