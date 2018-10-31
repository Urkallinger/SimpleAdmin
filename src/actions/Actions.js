import {DUMMY_ACTION, SET_TITLE, SET_MENU_ITEMS, CLEAR_DUMMIES} from '../constants/ActionTypes';

export const setTitle = title => ({type: SET_TITLE, payload: title});
export const setMenuItems = menuItems => ({type: SET_MENU_ITEMS, payload: menuItems});

export const dummyAction = dummy => ({type: DUMMY_ACTION, payload: dummy});
export const clearDummies = () => ({type: CLEAR_DUMMIES});
