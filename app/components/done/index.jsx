import React from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import style from "./style.scss";
import {doneAction} from "./action";
import {methodDonedFilter} from "./filters";
import {Select} from "../../designStructure";



const done = (props) => {
    return ( 
            !!props.tags && <Select change={(e)=>props.doneAction(e.target.value)}>
                <option value="all">Todas as Tarefas</option>
                <option value={true}>Feitas</option>
                <option value={false}>Depedentes</option>
            </Select>
        )
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispach) => {
    return bindActionCreators({doneAction},dispach)
}


//method filter
export const doneFilter = methodDonedFilter;
//date component
export default connect(mapStateToProps, mapDispatchToProps)(done);