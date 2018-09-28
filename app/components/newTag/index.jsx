import React from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Modal, Badge, Button, Form, Row, Col , InputGroup, FormControl} from 'react-bootstrap';
import { FaWindowClose} from 'react-icons/fa';
import {create, delet} from '../../services/tags'
import {tagsDeleteAction, tagsUpdateAction} from "../tags/action";
import {newTagButton} from "./button";
import  "./style.scss";

class NewTag extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			name: ''
		};
	}

	onChange (e){
		return this.setState({ 
			[e.target.name]: e.target.value
		});
	}

	async deleteTags(id) {
		const ready = await delet(id)

		if(ready){
			this.props.tagsDeleteAction(id)
		}
		
	}

	async onSubmit (e) {
		e.preventDefault();
		const ready = await create(this.state)

		if(ready){
			this.props.tagsUpdateAction(this.state)
		}
		
	}
	
    render() {
		const { onHide, show } = this.props;
		const {name} = this.state
		return (
			<Modal
				onHide = {onHide}
				show = {show}
				size="lg"
				aria-labelledby="contained-modal"
				centered
			>
				<Modal.Header closeButton>	
					<Modal.Title id="contained-modal">
						Nova Tag
					</Modal.Title>
				</Modal.Header>
	
				<Modal.Body>
					<Form onSubmit={(e)=>this.onSubmit(e)}>
						<InputGroup className="mb-3">
							<FormControl
								type="text"			
								name="name"				
								onChange={(e)=>(this.onChange(e))}
								value = {name}
								required
							/>
							<InputGroup.Append>
								<Button variant="outline-secondary" type="submit">Criar</Button>
							</InputGroup.Append>
						</InputGroup>
					</Form>
					<div className="new-tags__box">
						{
							Object.values(this.props.tags)
							.map((item, id)=> 
								<Badge
									variant="info" 
									className="new-tags__badge"
									key={item.id}
									onClick={(e)=>this.deleteTags(item.id)}
								>
									<span className="new-tags__badge__description">
										{item.name}
									</span>
									<FaWindowClose/>
								</Badge>
							)
						}
					</div>
				</Modal.Body>
			</Modal>
		)
	}
  }


const mapStateToProps = state => state;

const mapDispatchToProps = (dispach) => {
    return bindActionCreators({tagsDeleteAction, tagsUpdateAction},dispach)
}

export const NewTagButton = newTagButton;
export default connect(mapStateToProps, mapDispatchToProps)(NewTag);	