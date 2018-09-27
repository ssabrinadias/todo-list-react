import React from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Modal, Button, Form, Row, Col} from 'react-bootstrap';
import {edit, create} from '../../services/taks'
import {tasksAction, tasksUpdateAction} from "../tasks/action";
import {newTaskButton} from "./button";
import moment from "moment"
// import style from "./style.scss";

class NewTask extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			id: '',
			data : {
				title: '',
				description: '',
				duration: '',
				hour: '',
				date: '',
				tags: ''
			}
		};
	}

	onChange (e){
		return this.setState({ 
			data: {
				...this.state.data,
				[e.target.name]: e.target.value
			}
		});
	}

	taskEdit(id) {
		if(id===null){
			return this.setState({
				id: null,
				data: {
					title: '',
					description: '',
					duration: '',
					hour: '',
					date: '',
					tags: ''
				}
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
			data: {
				title,
				description,
				duration: duration+"",
				hour,
				date,
				tags
			}
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

		const id = this.state.id;
		const service = id? edit : create;
		const ready = await service(id, this.state.data)

		let compileTask = {};

		if(ready){
			
			if(id) {
				this.props.tasksAction( Object.values(this.props.tasks)
					.map((item) => {
						if(item.id === id){
							item = {
								...item,
								...this.state.data
							}
						}
						return item
					})
				)
			} else {
				this.props.tasksUpdateAction(this.state.data)
			}
			
			this.props.onHide()
		}
	}
	
    render() {
	const { onHide, show } = this.props;
	const { description, title, tags, hour, date, duration} = this.state.data;
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
							required
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
									type="date"	
									onChange={this.onChange}			
									name="date"				
									onChange={(e)=>(this.onChange(e))}
									value = {date}
									required
								/>
							</Col>
							<Col>
								<Form.Label>Hora</Form.Label>
								<Form.Control
									type="time"	
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
							
					{/* <Form.Group as={Row} controlId="formPlaintextPassword">
						<Form.Label column sm="5">
							Selecione uma Tag:
						</Form.Label>
						<Col sm="7">
							<Form.Control 
								as="select"
								onChange={this.onChange}		
								name="tag"		
							>
							{
								Object.values(this.props.tags)
								.map(value=><option value={value.id}>{value.name}</option>)
							}
							</Form.Control>
						</Col>
					</Form.Group> */}

					<Button type="submit">Submit</Button>
				</Form>
			</Modal.Body>
        </Modal>
      );
    }
  }


const mapStateToProps = state => state;

const mapDispatchToProps = (dispach) => {
    return bindActionCreators({tasksAction, tasksUpdateAction},dispach)
}

export const NewTaskButton = newTaskButton;
export default connect(mapStateToProps, mapDispatchToProps)(NewTask);	