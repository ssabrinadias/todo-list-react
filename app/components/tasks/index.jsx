import React from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';    
import {tasksAction} from "./action";
import { ListGroup, Badge, Button, Alert } from 'react-bootstrap';
import { FaEdit, FaTrash, FaCheckCircle, FaCheck} from 'react-icons/fa';
import {edit} from '../../services/taks';

const  updateTask = async (value, props)=> {
    var res = await edit(value.id, {done: !value.done})
    if(res) {
         props.tasksAction (Object.values(props.tasks)
        .map(item=> {
            if(item.id === value.id) {
                item.done = !item.done 
            }
            return item
        })) 
    }    
}

const tasks = (props) => {
    let tasks = Object.entries(props.filteredTasks || []);
    return (    
        <ListGroup className="list">
            <ListGroup.Item>
                {   tasks.length ? 
                    tasks.map(([key, value],id)=> {
                        
                        return <ul className={`list__item ${value.done ? "list__item--done" : ""}`} key={id}>
                            <li className='list__item__col'>
                                <label  className={`list__item__fake-check ${value.done ? "list__item__fake-check--done" : ""}`} htmlFor={id}><FaCheck/></label>
                                <input className="list__item__check" type='checkbox' checked={value.done} onChange={(e)=>updateTask(value, props)} id={id} />
                            </li>
                            <li className='list__item__col'>{value.title}</li>
                            <li className='list__item__col'>{value.date}</li>
                            <li className='list__item__col'>
                                <Button variant="primary" className="list__btn" onClick={()=>props.newTask(value.id)}>
                                    <FaEdit/>
                                </Button>
                                <Button variant="primary" className="list__btn">
                                    <FaTrash/>
                                </Button>
                            </li>
                            <li className='list__item__col'>
                                <Badge variant="info">Estudos</Badge>
                                <Badge variant="danger">Faculdade</Badge>
                            </li>
                        </ul>
                    }) :
                    <Alert variant="warning" className="list__alert">
                        Não há exibições para esse período
                    </Alert>
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