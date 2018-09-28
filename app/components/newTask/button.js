import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import "./style.scss";

export const newTaskButton = props => (
	<Button onClick={() => props.newTask(null)} className="button">
		<span className="button__description">Tarefa</span>
		<FaPlus />
	</Button>
);
