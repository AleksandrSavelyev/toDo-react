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
        
        default:
            return state;
    }
}