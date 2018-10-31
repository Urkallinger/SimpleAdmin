import {DUMMY_ACTION, SET_TITLE} from '../constants/ActionTypes';

const initialState = {
    title: '',
    dummies: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_TITLE:
        return {...state, title: action.payload};
    case DUMMY_ACTION:
        return {...state, dummies: [...state.dummies, action.payload]};
    default:
        return state;
    }
};
export default rootReducer;
