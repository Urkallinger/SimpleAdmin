import {SET_TITLE, SET_OPTION_MENU_ITEMS, SHOW_MESSAGE} from '../constants/ActionTypes';
import {Action} from '../actions/Actions';
import {OptionMenuItem} from '../model/OptionMenuItem';

interface InitState {
  title: string;
  optMenuItems: Array<OptionMenuItem>;
  message: string;
}

const initialState: InitState = {
  title: '',
  optMenuItems: [],
  message: ''
};

const RootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
  case SET_TITLE:
    return {...state, title: action.payload};
  case SET_OPTION_MENU_ITEMS:
    return {...state, optMenuItems: action.payload};
  case SHOW_MESSAGE:
    return {...state, message: action.payload};
  default:
    return state;
  }
};
export default RootReducer;
