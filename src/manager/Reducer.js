import constants from '../constants';

const initialState = {
    tasks: [],
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case constants.SAVE_TASK: 
            return {
                ...state,
                    tasks: [...state.tasks, actions.payload],
            }

        case constants.DELETE_TASK:
            return {
                ...state,
                    tasks: state.tasks.filter(item => item.id !== actions.payload) 
            }

        case constants.CHECKED_TASK:
            return {
                ...state,
                    tasks: state.tasks.map(item => item.id === actions.payload? {...item,isChecked:true}: item)
            }
        
        default:
            return state;
    }
}