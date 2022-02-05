import React from 'react';
import Task from "./Task";

const Column = (props) => {
    return (
        <div className='col border-2'>
            <h2>{props.status.title}</h2>
            {props.cards
                .filter(el => el.status === props.status.title)
                .sort((a, b) => b.priority - a.priority)
                .map(el => <Task
                    priorityNum={props.priorityNum}
                    editCard={props.editCard}
                    cards={el}
                    deleteCard={props.deleteCard}
                    changeStatus={props.changeStatus}
                    statuses={props.statuses}
                    changePriority={props.changePriority}/>)}
        </div>
    );
};

export default Column;