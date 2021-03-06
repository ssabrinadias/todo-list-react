import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import moment from "moment";
import {methodGetDate} from './service';
import {actionDate} from './action';

const changeDate = ({selectDate, sum, typeDate}) => (
	sum ? selectDate.add(1, `${typeDate}s`) :
	selectDate.subtract(1, `${typeDate}s`)
).format('DD/MM/YYYY')

const Date = (props) => {
	const selectDate = moment(props.filters.date, "DD/MM/YYYY");
	const typeDate = props.filters.period;
	return (!!props.filters.date && <div className="date">

		<button className="date__button"
			onClick={()=> {
				props.actionDate(changeDate({selectDate, typeDate,}))
			}
		}>
			<FaArrowLeft/>
		</button>

		<span className='date__display'>{
			Array.isArray(props.dateShow) ? 
				`${moment(props.dateShow[0], "DD/MM/YYYY").format('DD/MM')} à
				${moment(props.dateShow.pop(), "DD/MM/YYYY").format('DD/MM')}` :

				typeDate === "month"? selectDate.format('MMMM') :  selectDate.format('DD/MM') 
			}</span>

		<button className="date__button"
			onClick={()=> {
				props.actionDate(changeDate({selectDate, typeDate: props.filters.period, sum:true}))
			}
		}>
			<FaArrowRight/>
		</button>

		<span className="date__info">{selectDate.format('YYYY')}</span>
	</div>)
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispach) => {
    return bindActionCreators({actionDate},dispach)
}

// get date method
export const getDate = methodGetDate;
//method dispach
export const dispatchDate = actionDate;
//date component
export default connect(mapStateToProps, mapDispatchToProps)(Date);