import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";

export const newTaskButton = props => (
	<Button onClick={() => props.newTask("new")} />
);
