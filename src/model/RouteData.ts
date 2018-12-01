import { ComponentType } from "react";

export class RouteData {

  _label: string
  _component: ComponentType;
  _path: string;
  _icon: JSX.Element;

  constructor(label: string, component: ComponentType, path: string, icon: JSX.Element) {
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
}
