import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';

const CreateCardModal = (props) => {
    const [modal, setModal] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('')
    const [taskPriority, setTaskPriority] = useState('')

    const toggle = () => setModal(!modal);

    const onCreate = () => {
        props.createCard({
            name: taskName,
            description: taskDescription,
            priority: taskPriority,
            status: props.statuses[0].title
        });
        toggle()
        setTaskName('')
        setTaskDescription('')
        setTaskPriority('')
    }


    return (
        <div>
            <Button color="primary" onClick={toggle}>Create Task</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create task</ModalHeader>
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
                    <Button disabled={!taskName || !taskDescription || !taskPriority} color="primary" onClick={onCreate}>Create task</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default CreateCardModal;