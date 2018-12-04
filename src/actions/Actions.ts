import {
  SET_TITLE,
  SET_OPTION_MENU_ITEMS,
  SHOW_MESSAGE,
  SEND_MESSAGE,
  CLEAR_MESSAGES,
  APPEND_MESSAGE
} from '../constants/ActionTypes';
import {Message} from '../model/Message';
import {OptionMenuItem} from '../model/OptionMenuItem';

export interface Action {
  type: string;
  payload?: any;
}

export const setTitle = (title: string) => ({type: SET_TITLE, payload: title});
export const setOptionMenuItems = (optMenuItems: Array<OptionMenuItem>) => ({
  type: SET_OPTION_MENU_ITEMS,
  payload: optMenuItems
});

export const showMessage = (message: Message) => ({type: SHOW_MESSAGE, payload: message});

// Websocket
export const sendMessage = (message: string) => ({type: SEND_MESSAGE, payload: message});
export const appendMessage = (message: string) => ({type: APPEND_MESSAGE, payload: message});
export const clearMessages = () => ({type: CLEAR_MESSAGES});
