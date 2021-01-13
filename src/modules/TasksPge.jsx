import React, { useState } from 'react';

const TasksPage = props => {
    const [task, setTask] = useState('');
    const [id, setId] = useState(0);

    const addTask = () => {
        setId(id+1);
        props.saveTask({task, id});
        setTask('');
        console.log(props);
    }
    
    const changeInput = event => {
        setTask(event.target.value);
    }

    return(
        <div className={"main-wrapper"}>
            <div className={"input-wrapper"} > 
                <input className={"input-text"} onChange={changeInput}/>
                <button className={"add-button"} onClick={addTask}>добавить</button>
            </div>
            <div className={"task-wrapper"}>
                <ul>
                    {
                        props.tasks.map((item, index) => (
                            <li key={index}
                                id={item.id}
                            >
                                {item.task}
                                <span>X</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    ) 
}

export default React.memo(TasksPage);