import {DUMMY_ACTION, SET_TITLE, SET_MENU_ITEMS, CLEAR_DUMMIES} from '../constants/ActionTypes';

const initialState = {
  title: '',
  menuItems: [],
  dummies: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_TITLE:
    return {...state, title: action.payload};
  case SET_MENU_ITEMS:
    return {...state, menuItems: action.payload};
  case DUMMY_ACTION:
    return {...state, dummies: [...state.dummies, action.payload]};
  case CLEAR_DUMMIES:
    return {...state, dummies: []};
  default:
    return state;
  }
};
export default rootReducer;
