import React from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';    
import {tasksAction, tasksDeleteAction} from "./action";
import { ListGroup, Badge, Button, Alert } from 'react-bootstrap';
import { FaEdit, FaTrash, FaCheckCircle, FaCheck, FaCheckSquare} from 'react-icons/fa';
import {edit, delet} from '../../services/taks';
import moment from 'moment';

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

const  deleteTask = async (id, props)=> {
    var ready = await delet(id)
    if(ready) {
        
        props.tasksDeleteAction(id)
    }    
}

const tasks = (props) => {
    const tag = Object.values(props.tags).filter((item)=>item.id === "1").pop();
    const tasks = Object.entries(props.filteredTasks || []);
    return (    
        <ListGroup className="list">
            <ListGroup.Item>
                {   tasks.length ? 
                    tasks.map(([key, value],id)=> {
                        
                        return <ul className={`list__item ${value.done ? "list__item--done" : ""}`} key={id}>
                            <li className='list__item__col'>
                                <label  className={`list__item__fake-check ${value.done ? "list__item__fake-check--done" : ""}`} htmlFor={id}><FaCheckSquare/></label>
                                <input className="list__item__check" type='checkbox' checked={value.done} onChange={(e)=>updateTask(value, props)} id={id} />
                            </li>
                            <li className='list__item__col'>{value.title}</li>
                            <li className='list__item__col'>{moment(value.date, "YYYY-MM-DD").format("DD/MM/YYYY")}</li>
                            <li className='list__item__col'>{value.hour}</li>
                            <li className='list__item__col'>
                                <Badge variant="info">
                                    {tag.name}
                                    </Badge>
                            </li>
                            <li className='list__item__col'>
                                <Button variant="primary" className="list__btn" onClick={()=>props.newTask(value.id)}>
                                    <FaEdit/>
                                </Button>
                                <Button variant="primary" className="list__btn" onClick={(e)=>deleteTask(value.id, props)}>
                                    <FaTrash/>
                                </Button>
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
    return bindActionCreators({tasksAction, tasksDeleteAction},dispach)
}


//method dispach
export const dispatchTasks = tasksAction;
//date component
export default connect(mapStateToProps, mapDispatchToProps)(tasks);