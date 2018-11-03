export class RouteData {
  constructor(label, component, path, icon) {
    this._label = label;
    this._component = component;
    this._path = path;
    this._icon = icon;
  }

  get label() {
    return this._label;
  }
  set label(label) {
    this._label = label;
  }

  get component() {
    return this._component;
  }
  set component(component) {
    this._component = component;
  }

  get path() {
    return this._path;
  }
  set path(path) {
    this._path = path;
  }

  get icon() {
    return this._icon;
  }

  set icon(icon) {
    this._icon = icon;
  }

  hasIcon
}
