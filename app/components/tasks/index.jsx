import React from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";
import {tasksAction} from "./action";
import { ListGroup, Badge, Button } from 'react-bootstrap';
import { FaEdit, FaTrash} from 'react-icons/fa';



const tasks = (props) => {
    return (
        <ListGroup className="list-group">
            <ListGroup.Item>
                {
                    Object.entries(props.filteredTasks || [])
                    .map(([chave, valor],id)=> (
                        <ul className='list-group__list' key={id}>
                            <li className='list-group__list__col'>
                                <input type='checkbox'/>
                            </li>
                            <li className='list-group__list__col'>{valor.title}</li>
                            <li className='list-group__list__col'>{valor.date}</li>
                            <li className='list-group__list__col'>
                                <Button variant="primary"><FaEdit/></Button>
                                <Button variant="primary"><FaTrash/></Button>
                            </li>
                            <li className='list-group__list__col'>
                                <Badge variant="info">Estudos</Badge>
                                <Badge variant="danger">Faculdade</Badge>
                            </li>
                        </ul>
                    ))
                }
            </ListGroup.Item>
        </ListGroup>
    )
};


//method dispach
export const dispatchTasks = tasksAction;
//date component
export default tasks