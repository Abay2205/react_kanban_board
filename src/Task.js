import React from 'react';
import DeleteCardModal from "./DeleteCardModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import EditTask from "./EditTask";


const Task = (props) => {

    const disableLeft = props.statuses[0].title === props.cards.status;
    const disableRight = props.statuses[props.statuses.length - 1].title === props.cards.status;
    const disableUp = props.cards.priority >= 10;
    const disableDown = props.cards.priority <= 1;

    return (<div>
        <div className="card">

            <div className="card-body">
                <h5 className="card-title">{props.cards.name} </h5>
                <div className="card-header">
                    {props.cards.description}
                </div>
                <div className="dropdown">
                    <button className="btn btn-outline-primary" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        ...
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <EditTask editCard={props.editCard} statuses={props.statuses} priorityNum={props.priorityNum} cardId={props.cards._id} cards={props.cards}/>
                        <DeleteCardModal cardName={props.cards.name} deleteCard={props.deleteCard}
                                         cardId={props.cards._id}/>
                    </ul>
                </div>

                <p className="card-text">priority: {props.cards.priority}
                    <button disabled={disableUp} className='btn btn-outline-primary'
                            onClick={() => props.changePriority(props.cards._id, props.cards.priority, +1)}>↑
                    </button>
                    {" "}
                    <button disabled={disableDown} className='btn btn-outline-primary'
                            onClick={() => props.changePriority(props.cards._id, props.cards.priority, -1)}>↓
                    </button>

                </p>
                <button disabled={disableLeft} className='btn btn-outline-primary'
                        onClick={() => props.changeStatus(props.cards._id, props.cards.status, -1)}>←
                </button>
                {' '}
                <button disabled={disableRight} className='btn btn-outline-primary'
                        onClick={() => props.changeStatus(props.cards._id, props.cards.status, +1)}>→
                </button>



            </div>

        </div>
    </div>);
};

export default Task;