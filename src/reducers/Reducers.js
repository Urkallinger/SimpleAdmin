import {DUMMY_ACTION} from '../constants/ActionTypes';

const initialState = {
    dummies: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case DUMMY_ACTION:
        return {...state, dummies: [...state.dummies, action.payload]};
    default:
        return state;
    }
};
export default rootReducer;
