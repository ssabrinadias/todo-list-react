import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import { Button, ButtonGroup } from 'react-bootstrap';
import {dateAction} from './action';


const Date = (props) => {
	return <div className="period-filter">
	</div>
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispach) => {
    return bindActionCreators({dateAction},dispach)
}

export default connect(mapStateToProps, mapDispatchToProps)(Date);