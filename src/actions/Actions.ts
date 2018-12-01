import {
  DUMMY_ACTION,
  SET_TITLE,
  SET_OPTION_MENU_ITEMS,
  CLEAR_DUMMIES,
  SHOW_MESSAGE
} from '../constants/ActionTypes';
import { Message } from '../model/Message';
import { OptionMenuItem } from '../model/OptionMenuItem';

export interface Action {
  type: string,
  payload: any
}

export const setTitle = (title: string) => ({type: SET_TITLE, payload: title});
export const setOptionMenuItems = (optMenuItems: Array<OptionMenuItem>) => ({
  type: SET_OPTION_MENU_ITEMS,
  payload: optMenuItems
});

export const showMessage = (message: Message) => ({type: SHOW_MESSAGE, payload: message});

export const dummyAction = (dummy: string) => ({type: DUMMY_ACTION, payload: dummy});
export const clearDummies = () => ({type: CLEAR_DUMMIES});
