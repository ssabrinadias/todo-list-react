import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { ListGroup, Badge, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';


const Tasks = (props) => {
	return (
        <ListGroup className="list-group">
            <ListGroup.Item>
                <ul className='list-group__list'>
                    <li className='list-group__list__col'>
                        <input type='checkbox'/>
                    </li>
                    <li className='list-group__list__col'>Tomar banho</li>
                    <li className='list-group__list__col'>11/11/11</li>
                    <li className='list-group__list__col'>
                        <Button variant="primary"><FaEdit/></Button>
                        <Button variant="primary"><FaTrash/></Button>
                    </li>
                    <li className='list-group__list__col'>
                        <Badge variant="info">saúde</Badge>
                        <Badge variant="danger">preguiça</Badge>
                    </li>
                </ul>
            </ListGroup.Item>
        </ListGroup>
    )
};

const mapStateToProps = state => state;

// const mapDispatchToProps = (dispach) => {
//     return bindActionCreators({periodAction},dispach)
// }

export default connect(mapStateToProps)(Tasks);