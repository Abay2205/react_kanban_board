import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {useState} from 'react';

const DeleteCardModal = (props) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const deleteAndClose = () => {
        toggle();
        props.deleteCard(props.cardId);
    }


    return (
        <div>
            <Button color="danger" onClick={toggle}>Delete</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>You really want to delete?</ModalHeader>
                <ModalBody>
                    This task: {props.cardName}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={deleteAndClose}>Yes</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default DeleteCardModal;