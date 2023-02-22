import { Button } from 'react-bootstrap';
import { useState, useRef, useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

import Task from '../components/Task';
import DeleteAll from '../components/DeleteAll';

const All = () => {

    const { activeTasks, handleActiveTasks, completedTasks, handleCompletedTasks } = useContext(GlobalContext);

    const inputTaskEle = useRef();

    const [tasks, setTasks] = useState(() => {
        if(localStorage.getItem('tasks')) {
            return JSON.parse(localStorage.getItem('tasks'));
        }
        return []
    })

    const [taskInput, setTaskInput] = useState('') 

    const handleAddTask = () => {
        if(taskInput.length) {
            inputTaskEle.current.focus();
            setTasks(prevTasks => {
                const newTasks = [...prevTasks, taskInput];
                localStorage.setItem('tasks', JSON.stringify(newTasks));
                return newTasks
            });
            setTaskInput('')
        }
    }

    const handleDeleteTask = (index) => {
        setTasks(prevTasks => {
            const newTasks = prevTasks.filter((task, currentIndex) => {
                return currentIndex !== index;
            })
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            return newTasks
        })
    }

    const handleActiveTask = (task, index) => {
        setTasks(prevTasks => {
            const newTasks = prevTasks.filter((currentTask, currentIndex) => {
                return currentIndex !== index
            })
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            const newActiveTasks = [...activeTasks, task]
            handleActiveTasks(newActiveTasks)
            return newTasks;
        })
    }

    const handleCompleteTask = (task,index) => {
        setTasks(prevTasks => {
            const newTasks = prevTasks.filter((currentTask, currentIndex) => {
                return currentIndex !== index
            })
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            handleCompletedTasks([...completedTasks, task])
            return newTasks;
        })
    }

    const handeleteAll = () => {
        localStorage.setItem('tasks', JSON.stringify([]));
        setTasks([])
    }

    return (
        <div className="pt-4">
            <div className="d-flex">
                <input 
                    ref = {inputTaskEle}
                    placeholder="Add details" 
                    style={{ 
                        flex: "1",
                        borderRadius: "8px",    
                        borderColor: '#C9C6C6',
                        padding: "0 8px"
                    }}
                    value = {taskInput}
                    onChange = {(e) => setTaskInput(e.target.value)}
                    />
                <div className='ms-3'>
                    <Button className='px-4' variant="primary" onClick={handleAddTask}>Add</Button>
                </div>
            </div>
            <div className='mt-4'>
                <ul>
                    {
                        tasks.map((task, index) => (
                            <Task 
                                key={index} 
                                task = { task } 
                                onDeleteTask = { () => handleDeleteTask(index) } 
                                onActiveTask = {() => handleActiveTask(task, index)}
                                onCompleteTask = {() => handleCompleteTask(task,index)}
                            />
                        ))
                    }
                </ul>
            </div>
            <div className='mt-4'>
                <DeleteAll onDeleteAll = {handeleteAll} />
            </div>
        </div>
    )
}

export default All;