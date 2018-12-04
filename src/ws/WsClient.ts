import io from 'socket.io-client';
import { dummyAction } from '../actions/Actions';

export class WsClient {
  socket: SocketIOClient.Socket;
  dispatch: any;

  constructor() {
    this.dispatch = window.store.dispatch;
    this.socket = io.connect('http://127.0.0.1:5000');
    this.socket.on("connect", this.onConnect);
    this.socket.on("message", this.onMessage);
  }

  onConnect = () => {
    this.socket.send("User has connected");
  }

  onMessage = (msg: string) => {
    this.dispatch(dummyAction(msg));
  }
}