import {
  DUMMY_ACTION,
  SET_TITLE,
  SET_OPTION_MENU_ITEMS,
  CLEAR_DUMMIES,
  SHOW_MESSAGE
} from '../constants/ActionTypes';
import { Action } from '../actions/Actions';

const initialState = {
  title: '',
  optMenuItems: [],
  dummies: ['dummy'],
  message: undefined
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
  case SET_TITLE:
    return {...state, title: action.payload};
  case SET_OPTION_MENU_ITEMS:
    return {...state, optMenuItems: action.payload};
  case DUMMY_ACTION:
    return {...state, dummies: [...state.dummies, action.payload]};
  case CLEAR_DUMMIES:
    return {...state, dummies: []};
  case SHOW_MESSAGE:
    return {...state, message: action.payload};
  default:
    return state;
  }
};
export default rootReducer;
