import constants from '../constants';

export const saveTask = payload => ({
    type: constants.SAVE_TASK,
    payload
});