import React from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';    
import {tasksAction} from "./action";
import { ListGroup, Badge, Button } from 'react-bootstrap';
import { FaEdit, FaTrash} from 'react-icons/fa';
import {edit} from '../../services/taks';

const updateTask = (id, value, action)=> {
    // edit(value.id, {})
    let actual = {
        [id]: {
            ...value,
            done: !value.done
        }
    }
    action(actual)
}


const tasks = (props) => {
    return (
        <ListGroup className="list">
            <ListGroup.Item>
                {
                    Object.entries(props.filteredTasks || [])
                    .map(([key, value],id)=> {
                        
                        return <ul className={`list__item ${value.done ? "list__item--done" : ""}`} key={id}>
                            <li className='list__item__col'>
                                <input type='checkbox' checked={value.done} onChange={(e)=>updateTask(id, value, props.tasksAction)} />
                            </li>
                            <li className='list__item__col'>{value.title}</li>
                            <li className='list__item__col'>{value.date}</li>
                            <li className='list__item__col'>
                                <Button variant="primary" className="list__btn"><FaEdit/></Button>
                                <Button variant="primary" className="list__btn"><FaTrash/></Button>
                            </li>
                            <li className='list__item__col'>
                                <Badge variant="info">Estudos</Badge>
                                <Badge variant="danger">Faculdade</Badge>
                            </li>
                        </ul>
                    })
                }
            </ListGroup.Item>
        </ListGroup>
    )
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispach) => {
    return bindActionCreators({tasksAction},dispach)
}


//method dispach
export const dispatchTasks = tasksAction;
//date component
export default connect(mapStateToProps, mapDispatchToProps)(tasks);