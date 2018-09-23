import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import { Button, ButtonGroup } from 'react-bootstrap';
import {dateAction} from './action';
import {methodGetDate} from './service';
import {actionDate} from './action';
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa';


const Date = (props) => {
	return <div className="date">
		<button className="date__button"><FaArrowLeft/></button>
		<span className='date__display'>19/09</span>
		<button className="date__button"><FaArrowRight/></button>
		<span className="date__info">2018</span>
	</div>
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispach) => {
    return bindActionCreators({dateAction},dispach)
}

// get date mathod
export const getDate = methodGetDate;
//method dispach
export const dispatchDate = actionDate;
//date component
export default connect(mapStateToProps, mapDispatchToProps)(Date);