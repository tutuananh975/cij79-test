import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import Task from '../components/Task';
import DeleteAll from '../components/DeleteAll';

const Active = () => {
    const { activeTasks, handleActiveTasks, completedTasks, handleCompletedTasks } = useContext(GlobalContext);

    const handleCompleteTask = (task,index) => {
        const newActiveTasks = activeTasks.filter((curentTask, currentIndex) => {
            return index !== currentIndex;
        })
        const newCompleteTasks = [...completedTasks, task];
        handleActiveTasks(newActiveTasks);
        handleCompletedTasks(newCompleteTasks)
    }

    const handleDeleteTask = (index) => {
        const newTasks = activeTasks.filter((task, currentIndex) => {
            return index !== currentIndex
        })
        handleActiveTasks(newTasks);
    } 

    const handeleteAll = () => {
        const newTasks = [];
        handleActiveTasks(newTasks);
    }

    return (
        <div className="pt-4">
            <div className='mt-4'>
                <ul>
                    {
                        activeTasks.map((task, index) => (
                            <Task 
                                key={index} 
                                task = { task } 
                                onCompleteTask = {() => handleCompleteTask(task,index)} 
                                onDeleteTask = {() => handleDeleteTask(index)}
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

export default Active;