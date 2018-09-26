import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

export const newTaskButton = props => (
	<Button onClick={() => props.newTask(null)} className="button">
		<FaPlus />
	</Button>
);
