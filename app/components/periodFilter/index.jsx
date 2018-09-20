import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Button, ButtonGroup } from 'react-bootstrap';


export const PeriodFilter = (props) => (
	<div className="period-filter">
		<ButtonGroup aria-label="Basic example">
			<Button variant="secondary"></Button>
			<Button variant="secondary">Semana</Button>
			<Button variant="secondary">Mês</Button>
		</ButtonGroup>
	</div>
);


// const mapStateToProps = state=>state;

// export default connect(mapStateToProps)(PeriodFilter);