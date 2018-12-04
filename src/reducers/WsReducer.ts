import {SEND_MESSAGE, CLEAR_MESSAGES, APPEND_MESSAGE} from '../constants/ActionTypes';
import {Action} from '../actions/Actions';
import {WsClient} from '../ws/WsClient';

const wsClient = new WsClient();

interface InitState {
  messages: Array<string>;
}

const InitialState: InitState = {
  messages: []
};

// WebSocket Reducer
const WsReducer = (state = InitialState, action: Action) => {
  switch (action.type) {
  case SEND_MESSAGE:
    wsClient.sendMessage(action.payload);
    return state;
  case CLEAR_MESSAGES:
    return {...state, messages: []};
  case APPEND_MESSAGE:
    return {...state, messages: [...state.messages, action.payload]};
  default:
    return state;
  }
};
export default WsReducer;
