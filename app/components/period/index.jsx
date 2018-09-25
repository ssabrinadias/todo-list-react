import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Button, ButtonGroup } from 'react-bootstrap';
import {periodAction} from './action';
import {methodPeriodFilter} from './filters';


const Period = (props) => {

	const periods = {
		'Dia' : 'day',
		'Semana' : 'week',
		'Mês' : 'month'
	}
	
	const createButton = ({value, id}) =>(
		<Button
			key={id}
			value = {id}
			className={props.filters.period === id? 'period__btn active':'' + ' period__btn'}
			onClick={({target})=>props.periodAction(target.value)}
		>
			{value}
		</Button>
	)

	return <div className="period">
		<ButtonGroup >
			{
				Object.entries(periods)
				.map(([value, id])=>(
					createButton({value,id})
				))
			}
		</ButtonGroup>
	</div>
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispach) => {
    return bindActionCreators({periodAction},dispach)
}



// filter method
export const periodFilter = methodPeriodFilter;
//method dispach
export const dispatchPeriod = periodAction;
//date component
export default connect(mapStateToProps, mapDispatchToProps)(Period);