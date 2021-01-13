import React from 'react';

const Tasks = props => {
    return (
        !props.isChecked?
        <li id={props.id} onClick={props.check} className={'task-list'}>
            {props.task}
            <span onClick={props.removeTask} className={'close'} id={props.id} children={'X'} />
        </li>:
        <li id={props.id} onClick={props.check} className={'checked-task'}>
            {props.task}
            <span onClick={props.removeTask} className={'close'} id={props.id} children={'X'} />
        </li>
    )
}

export default React.memo(Tasks);