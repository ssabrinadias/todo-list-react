import React from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import style from "./style.scss";
import {tagsAction, getTagsAction} from "./action";
import {methodTagsdFilter} from "./filters";
import {Select} from "../../designStructure";
    


const tags = (props) => {
    return ( 
            !!props.tags && 
            <Select value="all" change={(e)=>props.tagsAction(e.target.value)}>
                <option value="all">Todas as tag</option>
                {
                    Object.entries(props.tags)
                    .map(([key, value])=>(
                        <option
                            key={key}
                            value={value.id}
                        >
                            {value.name}
                        </option>
                    ))
                }
            </Select>
        )
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispach) => {
    return bindActionCreators({tagsAction},dispach)
}


//get method tags dispatch 
export const dispatchGetTags = getTagsAction;
//method filter
export const tagsFilter = methodTagsdFilter;
//date component
export default connect(mapStateToProps, mapDispatchToProps)(tags);