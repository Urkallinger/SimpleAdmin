export class Message {

  _message: string;
  _variant: string

  constructor(message: string, variant='') {
    this._message = message;
    this._variant = variant;
  }

  get message() {
    return this._message;
  }

  set message(message) {
    this._message = message;
  }

  get variant() {
    return this._variant;
  }

  set variant(icon) {
    this._variant = icon;
  }
}