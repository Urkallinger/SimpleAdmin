import {DUMMY_ACTION, SET_TITLE} from '../constants/ActionTypes';

export const dummyAction = dummy => ({type: DUMMY_ACTION, payload: dummy});
export const setTitle = title => ({type: SET_TITLE, payload: title});
