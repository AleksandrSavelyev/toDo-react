import React, { useState } from 'react';
import Tasks from './component/Tasks.jsx';
import './TaskPageStyle.css';

const TasksPage = props => {
    const [task, setTask] = useState('');
    const [id, setId] = useState(0);

    const addTask = () => {
        setId(id+1);
        props.saveTask({task, id});
        setTask('');
    }
    
    const changeInput = event => {
        setTask(event.target.value);
    }

    const removeTask = event => {
        props.deleteTask(+event.target.id);
    }

    const checkTask = event => {
        props.checkedTask(+event.target.id);
        console.log(props);
    }

    return(
        <div className={"main-wrapper"}>
            <div className={"input-wrapper"} > 
                <input value={task} className={"input-text"} onChange={changeInput} placeholder={'введите текст...'}/>
                <button className={"add-button"} onClick={addTask}>добавить</button>
            </div>
            <div className={"task-wrapper"}>
                <ul>
                    {
                        props.tasks.map((item, index) => (
                            <Tasks key={index}
                                isChecked = {item.isChecked}
                                id={item.id}                    
                                task={item.task}
                                check={checkTask}
                                removeTask={removeTask}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    ) 
}

export default React.memo(TasksPage);