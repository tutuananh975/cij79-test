import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import DeleteAll from '../components/DeleteAll';

import Task from '../components/Task';

const Completed = () => {   

    const { completedTasks, handleCompletedTasks } = useContext(GlobalContext);

    const handleDeleteTask = (index) => {
        const newTasks = completedTasks.filter((task, currentIndex) => {
            return index !== currentIndex
        })
        handleCompletedTasks(newTasks);
    }

    const handeleteAll = () => {
        const newTasks = [];
        handleCompletedTasks(newTasks);
    }
    return (
        <div className="pt-4">
            <div className='mt-4'>
                <ul>
                    {
                        completedTasks.map((task, index) => (
                            <Task key={index} task = { task } onDeleteTask = { () => handleDeleteTask(index) } />
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

export default Completed;