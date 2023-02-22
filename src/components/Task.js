import { Button } from "react-bootstrap"

const Task = ({ task, onDeleteTask, onCompleteTask, onActiveTask }) => {

    return (
        <li className="d-flex justify-content-between mt-2">
            <div className="d-flex align-items-center">
                <input type="checkbox" onChange={onCompleteTask}/>
                <p className="ms-2 fs-4">{task}</p>
            </div>  
            <div>
                <Button className='px-4 me-2' variant="success" onClick = {onActiveTask}>Active</Button>
                <Button 
                    className='px-4' 
                    variant="danger"
                    onClick={onDeleteTask}
                >Delete</Button>
            </div>
        </li>
    ) 
}

export default Task