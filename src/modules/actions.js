import constants from '../constants';

export const saveTask = payload => ({
    type: constants.SAVE_TASK,
    payload
});

export const deleteTask = payload => ({
    type: constants.DELETE_TASK,
    payload
});

export const checkedTask = payload => ({
    type: constants.CHECKED_TASK,
    payload
});