import {
  DUMMY_ACTION,
  SET_TITLE,
  SET_OPTION_MENU_ITEMS,
  CLEAR_DUMMIES,
  SHOW_MESSAGE
} from '../constants/ActionTypes';

export const setTitle = title => ({type: SET_TITLE, payload: title});
export const setOptionMenuItems = optMenuItems => ({
  type: SET_OPTION_MENU_ITEMS,
  payload: optMenuItems
});

export const showMessage = message => ({type: SHOW_MESSAGE, payload: message});

export const dummyAction = dummy => ({type: DUMMY_ACTION, payload: dummy});
export const clearDummies = () => ({type: CLEAR_DUMMIES});
