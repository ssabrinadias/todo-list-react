import React from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Modal, Button, Form, Row, Col} from 'react-bootstrap';
import {edit} from '../../services/taks'
import {tasksAction} from "../tasks/action";
import {newTaskButton} from "./button";
// import style from "./style.scss";

class NewTask extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			id: '',
			title: '',
			description: '',
			duration: '',
			hour: '',
			date: '',
			tags: []
		};
	}

	onChange (e){
		return this.setState({ [e.target.name]: e.target.value });
	}

	taskEdit(id) {
		console.log(id)
		if(id===null){
			return this.setState({
				id: null,
				title: '',
				description: '',
				duration: '',
				hour: '',
				date: '',
				tags: []
			});
		}
		Object.values(this.props.tasks)
		.filter((item)=> item.id === id)
		.map(({
			id,
			title,
			description,
			duration,
			hour,
			date,
			tags
		})=>this.setState({			
			id,
			title,
			description,
			duration: duration+"",
			hour,
			date,
			tags
		}))
	}

	componentDidUpdate() {
		let id = this.props.idTask;
		
		if(this.state.id !== id) {
			this.taskEdit(id)
		} 
	}

	async onSubmit (e)	 {
		e.preventDefault();
		let ready = await edit(this.state.id, this.state)
		if(ready){
			this.props.tasksAction(Object.values(this.props.tasks)
				.map((item) => {
					if(item.id === this.state.id){
						item = {
							...item,
							...this.state
						}
					}
					return item
				})
			)
			this.props.onHide()
		}
	}
	
    render() {
	const { onHide, show } = this.props;
	const { description, title, tags, hour, date, duration} = this.state;
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
					Nova Tarefa
				</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Form onSubmit={(e)=>this.onSubmit(e)}>

					<Form.Group>
						<Form.Label>Título</Form.Label>
						<Form.Control
							type="text"			
							name="title"				
							onChange={(e)=>(this.onChange(e))}
							value = {title}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Descrição</Form.Label>
						<Form.Control
							as="textarea"
							rows="3"			
							name="description"				
							onChange={(e)=>(this.onChange(e))}
							value = {description}
						/>
					</Form.Group>

					<Form.Group>
						<Row>
							<Col>
								<Form.Label>Data</Form.Label>
								<Form.Control
									type="text"	
									onChange={this.onChange}			
									name="date"				
									onChange={(e)=>(this.onChange(e))}
									value = {date}
								/>
							</Col>
							<Col>
								<Form.Label>Hora</Form.Label>
								<Form.Control
									type="text"	
									onChange={this.onChange}			
									name="hour"				
									onChange={(e)=>(this.onChange(e))}
									value = {hour}
								/>
							</Col>
						</Row>
					</Form.Group>
					
					<Form.Group>
						<Row>
							<Col>
								<Form.Label>Duração</Form.Label>
								<Form.Control
									type="text"	
									onChange={this.onChange}			
									name="duration"				
									onChange={(e)=>(this.onChange(e))}
									value = {duration}
								/>
							</Col>
						</Row>
					</Form.Group>
							
					<Form.Group as={Row} controlId="formPlaintextPassword">
						<Form.Label column sm="5">
							Selecione uma Tag:
						</Form.Label>
						<Col sm="7">
							<Form.Control 
								as="select"
							>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</Form.Control>
						</Col>
					</Form.Group>

					<Button type="submit">Submit</Button>
				</Form>
			</Modal.Body>
        </Modal>
      );
    }
  }


const mapStateToProps = state => state;

const mapDispatchToProps = (dispach) => {
    return bindActionCreators({tasksAction},dispach)
}

export const NewTaskButton = newTaskButton;
export default connect(mapStateToProps, mapDispatchToProps)(NewTask);	