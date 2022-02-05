import React, {useState} from 'react';
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const EditTask = (props) => {
    const [modal, setModal] = useState(false);
    const [taskName, setTaskName] = useState(props.cards.name);
    const [taskDescription, setTaskDescription] = useState(props.cards.description)
    const [taskPriority, setTaskPriority] = useState(props.cards.priority)
    const toggle = () => setModal(!modal);

    const onEdit = () => {
        const updatedCard = {...props.cardId, name: taskName,
            description: taskDescription,
            priority: taskPriority,
            status: props.statuses[0].title}
        props.editCard(updatedCard)
        toggle()
        setTaskName('')
        setTaskDescription('')
        setTaskPriority('')
    }
    return (
        <div>
            <Button color="primary" onClick={toggle}>Edit Task</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit task</ModalHeader>
                <ModalBody>
                    <Input placeholder="Task name" value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
                    <br/>
                    <Input placeholder="Description" value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)}/>
                    <br/>
                    <select className="form-select" aria-label="Default select example" value={taskPriority} onChange={(e)=>setTaskPriority(e.target.value)}>
                        <option selected>priority</option>
                        {props.priorityNum.map(el =>
                            <option key={el} value={el}>{el}</option>
                        )}

                    </select>
                </ModalBody>
                <ModalFooter>
                    <Button disabled={!taskName || !taskDescription || !taskPriority} color="primary" onClick={onEdit}>Edit task</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default EditTask;