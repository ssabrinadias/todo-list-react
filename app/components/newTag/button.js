import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import { FaFlag } from "react-icons/fa";
import "./style.scss";

export const newTagButton = props => (
	<Button onClick={() => props.newTag()} className="button">
		<span className="button__description">Tag</span>
		<FaFlag />
	</Button>
);
