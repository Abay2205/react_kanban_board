import {useEffect, useState} from "react";
import axios from "axios";
import Column from "./Column";
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateCardModal from "./CreateCardModal";
import Header from "./Header";


function App() {

    const [statuses, setStatuses] = useState([])
    const [cards, setCards] = useState([])

    const priorityNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const getStatuses = () => {
        axios.get("https://nazarov-kanban-server.herokuapp.com/column")
            .then(res => setStatuses(res.data))
            .catch(error => console.log(error))
    }
    const getCards = () => {
        axios.get("https://nazarov-kanban-server.herokuapp.com/card")
            .then(res => setCards(res.data))
            .catch(error => console.log(error))
    }
    const deleteCard = (id) => {
        axios.delete(`https://nazarov-kanban-server.herokuapp.com/card/${id}`)
            .then(res => getCards())
            .catch(error => console.log(error))
    }
    const createCard = (task) => {
        axios.post("https://nazarov-kanban-server.herokuapp.com/card",
            task)
            .then(res => getCards())
            .catch(error => console.log(error))
    }
    const editCard = (id) => {
        axios.patch(`https://nazarov-kanban-server.herokuapp.com/card/${id}`,)
            .then(res => getCards())
            .catch(error => console.log(error))
    }


    useEffect(() => {
        getStatuses()
        getCards()
    }, [])

    const changeStatus = (id, status, leftRight) => {
        const newStatus = statuses[statuses.map(el => el.status).indexOf(status) + leftRight].title;
        axios.put(`https://nazarov-kanban-server.herokuapp.com/card/${id}`,
            {status: newStatus})
            .then(res => getCards())
            .catch(error => console.log(error))
    }
    const changePriority = (id, priority, upDown) => {
        let newPriority = priority + upDown;
        axios.patch(`https://nazarov-kanban-server.herokuapp.com/card/${id}`,
            {priority: newPriority})
                .then(res => getCards())
                .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="container">
                <CreateCardModal priorityNum={priorityNum} createCard={createCard} statuses={statuses}/>
                <h1>Kanban Board</h1>
                <Header/>
                <div className='row align-items-start'>
                    {statuses.map(el => <Column
                        priorityNum={priorityNum}
                        editCard={editCard}
                        key={el._id}
                        cards={cards}
                        status={el}
                        deleteCard={deleteCard}
                        changeStatus={changeStatus}
                        statuses={statuses}
                        changePriority={changePriority}/>)}
                </div>
            </div>
        </div>

    );
}

export default App;
