/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */

import produce from 'immer';

import { Redux } from '../../types/local';

import { loginActions } from './login.actions';

export type State = Redux.UserState['login'];

const { types } = loginActions;

export const initialState: State = {
  isLoading: false,
};
export const loginPageReducer = produce((state: State, action: Redux.Action) => {
  switch (action.type) {
    case types.LOGIN.REQUEST:
      state.isLoading = true;
      break;
    case types.LOGIN.SUCCESS:
      state.isLoading = false;
      break;
    case types.LOGIN.FAILED:
      state.isLoading = false;
      break;

    // no default
  }
}, initialState);
